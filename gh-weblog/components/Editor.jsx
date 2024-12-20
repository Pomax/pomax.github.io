import { React, createClass } from "../lib/create-component.js";

export default createClass({
  getInitialState() {
    return { text: "" };
  },

  componentDidMount() {
    this.setState({ text: this.props.text });
  },

  render() {
    return (
      <textarea
        ref="textarea"
        className="editor"
        hidden={this.props.hidden}
        value={this.state.text}
        onChange={this.record}
      />
    );
  },

  setText(text) {
    const textarea = this.refs.textarea.getDOMNode();
    this.setState({ text }, () => textarea.focus());
  },

  record(evt) {
    const postData = evt.target.value;
    this.setState({ text: postData });
    const [title] = postData.match(/^#\s+[^\n]+\n+/);
    postData.replace(title, ``);
    this.props.update(title.trim(), postData.trim());
  },
});
