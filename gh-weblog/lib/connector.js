import { Octokit as OctokitCore } from "@octokit/core";
import { createOrUpdateTextFile } from "@octokit/plugin-create-or-update-text-file";
const Octokit = OctokitCore.plugin(createOrUpdateTextFile);

import utils from "./utils.js";

export default class Connector {
  constructor(options) {
    if (options && options.token && options.token.trim()) {
      this.options = options;
      this.setProperties(options);
    } else {
      this.path = `gh-weblog`;
      this.options = {
        path: this.path,
      };
    }
  }

  setProperties(options) {
    this.path = options.path;
    this.octokit = new Octokit({ auth: options.token });
  }

  async get(url) {
    const type = url.endsWith(`.json`) ? `json` : `text`;
    const result = await fetch(`${url}?t=${Date.now()}`);
    if (result.ok) {
      return await result[type]();
    }
    throw new Error(result.status);
  }

  async loadIndex() {
    return await this.get(`${this.path}/content/posts/index.json`);
  }

  async loadMetaData(id) {
    return this.get(`${this.path}/content/posts/metadata/${id}.json`);
  }

  async loadPostData(id) {
    return this.get(`${this.path}/content/posts/markdown/${id}.md`);
  }

  async waitForDeploy() {
    const { octokit, options } = this;
    const { user, repo } = options;
    return new Promise((resolve) => {
      (async function checkDeploy(resolve) {
        const { status } = (
          await octokit.request(`GET /repos/${user}/${repo}/actions/runs`)
        ).data.workflow_runs[0];
        if (status === `completed`) return resolve();
        // we recheck every 10 seconds, because deploys take long
        // enough that checking more frequently is just pointless.
        setTimeout(() => checkDeploy(resolve), 10000);
      })(resolve);
    });
  }

  // -----------------------------------------------------------

  async getCurrentSha() {
    const { octokit, options } = this;
    const { user, repo, branch } = options;
    return (
      await octokit.request(`GET /repos/${user}/${repo}/commits/${branch}`)
    ).data.sha;
  }

  async makeBlob(data) {
    const { user, repo } = this.options;
    const blobData = await this.octokit.git.createBlob({
      owner: user,
      repo,
      data,
      encoding: "utf-8",
    });
    return blobData.data;
  }

  async saveEntry({ id, metaData, postData }, index, saved) {
    const { title, created } = metaData;
    const path = `${this.path}/content/posts/`;
    const files = [
      {
        message: `Saving post data`,
        path: `${path}markdown/${id}.md`,
        content: postData,
      },
      {
        message: `Saving metadata`,
        path: `${path}metadata/${id}.json`,
        content: JSON.stringify(metaData, false, 2),
      },
      {
        message: `Saving updated index`,
        path: `${path}index.json`,
        content: JSON.stringify(index, false, 2),
      },
      {
        message: `Saving static redirect page`,
        path: `pages/${created}/${utils.titleReplace(title)}/index.html`,
        content: `<meta http-equiv="refresh" content="0; url=../../../index.html?postid=${created}">`,
      },
    ];
    await this.processCommit(files);
    saved?.();
  }

  async deleteEntry(id, title, created, index, deleted) {
    const path = `${this.path}/content/posts/`;
    const files = [
      {
        message: `Deleting post data`,
        path: `${path}markdown/${id}.md`,
      },
      {
        message: `Deleting metadata`,
        path: `${path}metadata/${id}.json`,
      },
      {
        message: `Saving updated index`,
        path: `${path}index.json`,
        content: JSON.stringify(index, false, 2),
      },
      {
        message: `Deleting static redirect page`,
        path: `pages/${created}/${utils.titleReplace(title)}/index.html`,
      },
    ];
    await this.processCommit(files);
    deleted?.();
  }

  async processCommit(files) {
    const { options, octokit } = this;
    const { user: owner, repo, branch } = options;
    for (const { message, path, content = null } of files) {
      const params = { owner, repo, branch, path, content, message };
      await octokit.createOrUpdateTextFile(params);
    }
  }

  async saveRSS(rss, updated) {
    const { options, octokit } = this;
    const { user: owner, repo, branch } = options;

    // TODO: add dedicated category RSS files?

    await octokit.createOrUpdateTextFile({
      owner,
      repo,
      branch,
      path: `${this.path}/rss.xml`,
      content: rss,
      message: `Update to RSS`,
    });

    updated?.();
  }
}
