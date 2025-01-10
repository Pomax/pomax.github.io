import { createClass } from "../lib/create-component.js";

export default createClass({
  getInitialState() {
    return { text: "" };
  },
  refs: ["textarea"],

  componentDidMount() {
    this.setState({ text: this.props.text });
  },

  render() {
    return (
      <textarea
        ref={this.refs.textarea}
        className="editor"
        hidden={this.props.hidden}
        value={this.state.text}
        onInput={this.record}
      />
    );
  },

  setText(text) {
    const textarea = this.refs.textarea.current;
    this.setState({ text }, () => textarea.focus());
  },

  record(evt) {
    const postData = evt.target.value;
    this.setState({ text: postData });
    const titleMatch = postData.match(/^#\s+([^\n]+)\n+/);
    let title = "";
    if (titleMatch) {
      const titleLine = titleMatch[0];
      title = titleMatch[1];
      postData.replace(titleLine, ``);
    }
    this.props.update(title.trim(), postData.trim());
  },
});
