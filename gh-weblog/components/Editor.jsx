import React from "../lib/vendor/react/react.0.12.min.js";

export default React.createClass({
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
    this.setState({ text: evt.target.value });
    this.props.update(evt);
  },
});
