import React from "../lib/vendor/react/react.0.12.min.js";
import WebLogSettings from "../lib/weblogsettings.js";

function stopPropagation(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}

export default React.createClass({
  getInitialState() {
    return {
      hidden: true,
      user: ``,
      repo: ``,
      branch: ``,
      path: `gh-weblog`,
      token: ``,
    };
  },

  componentDidMount() {
    const settings = WebLogSettings.getSettings();
    if (settings) {
      settings.hidden = this.props.hidden;
      this.setState(settings);
    }
  },

  render() {
    return (
      <div className="underlay" hidden={this.state.hidden} onClick={this.close}>
        <div className="overlay" onClick={stopPropagation}>
          <button className="logout" onClick={this.reset}>
            Log out
          </button>
          <h1>Weblog administration settings</h1>
          <table>
            <tr>
              <td>Your github username:</td>
              <td>
                <input
                  type="text"
                  placeholder="yourname"
                  value={this.state.user}
                  onChange={(evt) => this.update(`user`, evt)}
                />
              </td>
            </tr>
            <tr>
              <td>github repository:</td>
              <td>
                <input
                  type="text"
                  placeholder="yourname.github.io"
                  value={this.state.repo}
                  onChange={(evt) => this.update(`repo`, evt)}
                />
              </td>
            </tr>
            <tr>
              <td>repository branch:</td>
              <td>
                <input
                  type="text"
                  placeholder="master"
                  value={this.state.branch}
                  onChange={(evt) => this.update(`branch`, evt)}
                />
              </td>
            </tr>
            <tr>
              <td>path to weblog:</td>
              <td>
                <input
                  type="text"
                  value={this.state.path}
                  onChange={(evt) => this.update(`path`, evt)}
                />
              </td>
            </tr>
          </table>
          <h1>
            Github{" "}
            <a href="https://github.com/settings/applications">
              Personal Access Token
            </a>
          </h1>
          <input
            type="text"
            className="token"
            value={this.state.token}
            onChange={(evt) => this.update(`token`, evt)}
          />
          <p>
            Don't give this token more permissions than necessary! gh-weblog
            only needs repo access!
          </p>
        </div>
      </div>
    );
  },

  reset() {
    WebLogSettings.clearSettings();
    this.setState(this.getInitialState());
    this.props.onLogout();
  },

  show() {
    this.setState({ hidden: false });
  },

  close() {
    this.setState({ hidden: true }, () => this.props.onClose(this.state));
  },

  update(propName, evt) {
    this.setState({ [propName]: evt.target.value }, () => {
      this.updateSettings();
    });
  },

  updateSettings() {
    const { hidden, ...settings } = this.state;
    WebLogSettings.saveSettings(settings);
  },
});
