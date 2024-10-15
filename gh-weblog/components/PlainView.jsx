import React from "../lib/vendor/react/react.0.12.min.js";
import marked from "../lib/vendor/marked/marked.js";

export default React.createClass({
  render() {
    let { text } = this.props;

    // remove the title, since it's already rendered
    // as a separate heading above the post.
    text = text.replace(/^#\s+[^\n]+\n+/, ``);

    let html = marked(text);

    // If this is a "visitor view", show an excerpt + "show entire post"
    // if it's a long post and it's part of the full feed view.
    if (!this.props.editable && !this.props.singleton) {
      if (text.length > 1500) {
        // find the first few paragraphs
        let cut = html.indexOf(`<p>`);
        for (let i = 0; i < 5; i++) {
          cut = html.indexOf(`<p>`, cut + 4);
        }

        if (text.length - cut > 500) {
          html = `<details>
  <summary>
${html.substring(0, cut)}
  <div class="shade">&nbsp;</div>
  </summary>
${html.substring(cut)}
</details>`;
        }
      }
    }

    return (
      <div
        ref="post"
        className="post"
        hidden={this.props.hidden}
        onClick={this.props.onClick}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  },
});
