import React from "../lib/vendor/react/react.0.12.min.js";

export default React.createClass({
  render() {
    const tags = this.props.tags.map(function (tag, idx) {
      return (
        <div className="tag" key={idx}>
          {tag}
        </div>
      );
    });

    return (
      <div className="tags" onClick={this.updateTags}>
        {tags}
      </div>
    );
  },

  updateTags() {
    if (this.props.disabled) return;
    let tags = this.props.tags.join(", ");
    const newTags = prompt("Edit the post tags", tags);
    if (newTags) {
      tags = newTags.split(",").map((v) => v.trim());
      this.props.onChange(tags);
    }
  },
});
