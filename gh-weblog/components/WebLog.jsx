import { React, createClass } from "../lib/create-component.js";
import utils from "../lib/utils.js";
import Admin from "./Admin.jsx";
import Entry from "./Entry.jsx";

import WebLogSettings from "../lib/weblogsettings.js";
import Connector from "../lib/connector.js";
import marked from "../lib/vendor/marked/marked.js";

function timeToId(timestamp) {
  if (!timestamp) return false;
  var d = new Date(parseInt(timestamp, 10));
  var s = d.toISOString();
  var id = s.replace("T", "-").replace(/\..*/, "").replace(/\:/g, "-");
  return id;
}

export default createClass({
  initialState: {
    singleton: false,
    entries: {},
    entryIds: [],
    index: {},
    slice: { start: 0, end: 10 },
    authenticated: false,
    site: ``,
    issues: ``,
    tags: undefined,
  },

  getPostId() {
    const params = new URLSearchParams(location.search);
    const id = timeToId(params.get(`postid`));
    return id;
  },

  setIssueTracker() {
    const site = document.getElementById(`gh-weblog`).dataset.site;
    this.setState({ site, issues: `${site}/issues` });
  },

  async onMount() {
    this.loadSettings();
    const id = this.getPostId();

    // load the necessary index information
    const index = await this.connector.loadIndex();
    const tags = new Set();
    Object.values(index).forEach((e) =>
      e.tags?.forEach((tag) => tags.add(tag))
    );

    if (id) {
      document.querySelector(`a.home-link`).href = "../..";
    }

    this.setState(
      {
        entryIds: Object.keys(index).sort().reverse(),
        index,
        singleton: id,
        tags: [...tags],
      },
      () => {
        this.props.onTags?.(this.state.tags);
        this.loadEntries(id);
        this.setIssueTracker();
      }
    );
  },

  onUpdate() {
    this.props.onIndex(this.state.index);
  },

  render() {
    const { state } = this;

    if (!!state.singleton) {
      return this.renderContent();
    }

    const postButton = state.authenticated ? (
      <button className="admin post button" onClick={this.createEntry}>
        new entry
      </button>
    ) : (
      false
    );

    const adminButton = (
      <button
        className={`authenticate ${state.deploying ? `deploying` : ``}`}
        onClick={this.showSettings}
        onClose={this.bindSettings}
      >
        admin
      </button>
    );

    const moreButton = (
      <button className="more-posts" onClick={this.more}>
        Load more posts
      </button>
    );
    return this.renderContent(adminButton, postButton, moreButton);
  },

  renderContent(adminButton, postButton, moreButton) {
    // ensure the URL looks "normal"
    let entry = false;
    const id = this.state.singleton;
    if (id) {
      entry = this.state.entries[id];
      if (!entry) return null;
      const title = utils.titleReplace(entry.metaData.title);
      const vanityURL = `pages/${entry.metaData.created}/${title}`;
      history.replaceState({}, title, vanityURL);
    }

    return (
      <div ref="weblog" className="gh-weblog">
        {this.state.pending ? <div className="pending">pending...</div> : null}
        {this.generateToC()}
        {this.generateTagList()}
        <Admin
          ref="admin"
          hidden="true"
          onClose={this.bindSettings}
          onLogout={this.onLogOut}
        />
        {adminButton}
        {postButton}
        {this.generateEntries(entry)}
        {moreButton}
      </div>
    );
  },

  generateToC() {
    const { singleton } = this.state;
    return (
      <nav className="toc">
        <table>
          {Object.values(this.state.index)
            .reverse()
            .map(({ title, created, tags }) => {
              const date = new Date(created);
              let when = date.toLocaleDateString("en-GB", {
                month: "long",
                day: "numeric",
              });
              when = when.split(` `)[1] + " " + when.split(` `)[0];
              return (
                <tr>
                  <td className="year">{date.getFullYear()}</td>
                  <td className="when">{when}</td>
                  <td>
                    <a
                      href={`${singleton ? `../../` : ``}pages/${created}/${utils.titleReplace(title)}`}
                    >
                      {title}
                    </a>
                  </td>
                </tr>
              );
            })}
        </table>
      </nav>
    );
  },

  generateTagList() {
    return null;
    // We'll deal with this in follow-up
    const { tags } = this.state;
    if (!tags) return;
    return (
      <div className="taglist">
        {tags.sort().map((tag) => (
          <span>{tag.toLowerCase()}</span>
        ))}
      </div>
    );
  },

  getSlice() {
    const { state } = this;
    var start = state.slice.start;
    var end = state.slice.end;
    var ids = state.entryIds.slice(start, end);
    return ids.map((id) => state.entries[id]).filter(Boolean);
  },

  generateEntries(entry) {
    const entries = entry ? [entry] : this.getSlice();
    if (!entries.length) return;

    const { issues, singleton, authenticated } = this.state;

    return (
      <main>
        {entries.map((entry) => {
          return entry.metaData.draft && !authenticated ? null : (
            <Entry
              key={entry.metaData.id}
              id={entry.metaData.id}
              ref={entry.metaData.id}
              issues={issues}
              metaData={entry.metaData}
              postData={entry.postData}
              singleton={singleton}
              editable={!singleton && authenticated}
              onSave={this.saveEntry}
              onDelete={this.deleteEntry}
            />
          );
        })}
      </main>
    );
  },

  // ------------------------------------------------------------

  loadSettings() {
    const settings = WebLogSettings.getSettings();
    this.connector = new Connector(settings);
    if (settings && settings.token) {
      this.setState({ authenticated: true });
    }
  },

  showSettings() {
    this.refs.admin.show();
  },

  bindSettings(settings) {
    this.connector.setProperties(settings);
    if (settings.token.trim()) {
      this.setState({ authenticated: true });
    }
  },

  // ------------------------------------------------------------

  onLogOut() {
    this.setState({ authenticated: false });
  },

  more() {
    document.querySelector(`.more-posts`).disabled = true;
    document.querySelector(`.more-posts`).style.opacity = 0.1;
    const { start, end } = this.state.slice;
    const slice = { start, end: end + 10 };
    this.setState({ slice }, async () => {
      await this.loadEntries();
      document.querySelector(`.more-posts`).disabled = false;
      document.querySelector(`.more-posts`).style.opacity = 1;
    });
  },

  // ------------------------------------------------------------

  loadEntries(id) {
    const { updateEntry, connector, state } = this;
    const { entries } = state;

    // find load slice
    const start = state.slice.start;
    const end = state.slice.end;
    const slice = id ? [id] : state.entryIds.slice(start, end);

    // Load all entries in the list, and resolve (for any await calls) once done.
    return new Promise((resolve) => {
      (async function next(list) {
        if (!list.length) return resolve();
        const id = list.shift();
        if (!entries[id]) {
          const metaData = await connector.loadMetaData(id);
          const postData = await connector.loadPostData(id);
          await updateEntry(id, metaData, postData);
        }
        next(list);
      })(slice);
    });
  },

  createEntry() {
    const timestamp = Date.now();
    const metaData = {
      title: "New Entry",
      created: timestamp,
      published: timestamp,
      updated: timestamp,
      tags: [],
      draft: undefined,
    };
    const postData = "...click here to start editing your post...";
    const id = (metaData.id = timeToId(timestamp));
    this.updateEntry(id, metaData, postData);
  },

  updateEntry(id, metaData, postData) {
    // async, explicitly returns promise
    const { entries, index } = this.state;
    entries[id] = { metaData, postData };
    const { title, created, tags, draft } = metaData;
    index[id] = { title, created, tags, draft };
    const entryIds = Object.keys(index).sort().reverse();
    return new Promise((resolve) =>
      this.setState({ entryIds, entries, index }, resolve)
    );
  },

  async saveEntry(entry) {
    const { connector } = this;
    this.setState({ pending: true, deploying: true });
    const metaData = entry.getMetaData();
    const id = metaData.id;
    const postData = entry.getPostData();
    await this.updateEntry(id, metaData, postData);
    connector.saveEntry(
      { id, metaData, postData },
      this.state.index,
      async () => {
        console.log("save handled");
        await this.saveRSS();
        this.setState({ pending: false }, async () => {
          await connector.waitForDeploy();
          this.setState({ deploying: false });
        });
      }
    );
  },

  async deleteEntry(entry) {
    const { connector } = this;
    if (confirm("really delete post?")) {
      this.setState({ pending: true, deploying: true }, () => {
        const { entryIds, entries, index } = this.state;
        const { id, created, title } = entry.state;
        const pos = entryIds.indexOf(id);
        entryIds.splice(pos, 1);
        delete entries[id];
        delete index[id];
        this.setState({ entryIds, entries, index }, () => {
          const { index } = this.state;
          connector.deleteEntry(id, title, created, index, async () => {
            console.log("delete handled");
            // We need to run loadEntries to make sure we actually have
            // all the data available to regenerate the RSS. If we don't,
            // we'll be one entry short, and toRSS will error out when
            // it reaches entryToRSS(...) for the last entry.
            await this.loadEntries();
            this.saveRSS();
            this.setState({ pending: false }, async () => {
              await connector.waitForDeploy();
              this.setState({ deploying: false });
            });
          });
        });
      });
    }
  },

  // ------------------------------------------------------------

  saveRSS() {
    var connector = this.connector;
    console.log(`Updating RSS...`);
    connector.saveRSS(this.toRSS(), () => {
      console.log(`updated.`);
    });
  },

  toRSS() {
    const { singleton, slice, entries, entryIds, index } = this.state;

    // Don't update RSS if we're looking at a single entry.
    // We shouldn't even get to this function, really.
    if (singleton) return;

    // Don't update if there was a change to out-of-RSS content,
    // because those changes won't make it into the RSS feed anyway.
    if (slice.start >= 10) return;

    const { base } = this.props;
    const html = document.getElementById(`gh-weblog`);
    const { description } = html.dataset;

    // Boilerplate RSS 2.0 header
    var rssHeading = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="${base}/${this.props.path}/rss.xml" rel="self" type="application/rss+xml" />
<title>${document.title}</title>
<description>${description}</description>
<link>${location.toString()}</link>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<pubDate>${new Date().toUTCString()}</pubDate>
<ttl>1440</ttl>`;

    // generate the RSS for the latest 10 entries only.
    console.log(`toRSS`, { entryIds, entries, index });

    var entriesRSS = entryIds
      .slice(0, 10)
      .map((id) => {
        console.log(`toRSS: processing ${id}`);
        return this.entryToRSS(entries[id]);
      })
      .filter((v) => !!v)
      .join("\n");

    // Boilerplate tail bit for the RSS feed
    var rssTail = `</channel></rss>`;

    // concatenated
    return rssHeading + entriesRSS + rssTail;
  },

  entryToRSS(entry) {
    const { metaData, postData } = entry;
    const { created, published, title, tags } = metaData;
    const html = marked(postData);
    const { base } = WebLogSettings.getSettings();
    return `<item>
<title>${title}</title>
<description><![CDATA[${html}]]></description>
${tags.map((tag) => `<category>${tag}</category>`).join(`\n`)}
<link>${base}?postid=${created}</link>
<guid>${base}?postid=${created}</guid>
<pubDate>${new Date(published).toUTCString()}</pubDate>
</item>`;
  },
});
