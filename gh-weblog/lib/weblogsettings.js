const { pathname, host } = location;
const suffix =
  pathname.lastIndexOf("/") === pathname.length - 1 ? pathname : "/";
const loc = host + suffix;
const settingsName = `gh-weblog-settings-${loc}`;

function ghFromIO(ioURL) {
  if (!ioURL.includes(`github.io`)) {
    throw new Error(
      `Not hosted on github.io, and no data-site provided in #gh-weblog element`
    );
  }
  const [, user, repo] = uiURL.match(/:..([^.]+).github.io\/([\w-]+)/);
  return `https://github.com/${user}/${repo}`;
}

const domNode = document.getElementById(`gh-weblog`);
const title = document.title;
const {
  base = location.toString(),
  site = ghFromIO(base),
  path = `gh-weblog`,
  description,
} = domNode.dataset;

/**
 * ...docs go here...
 */
export const WebLogSettings = {
  getSettings() {
    const settings = localStorage[settingsName];
    if (!settings) {
      this.saveSettings({});
      return this.getSettings();
    }
    return JSON.parse(settings);
  },

  saveSettings(settings) {
    Object.assign(settings, { base, description, path, site, title });
    localStorage[settingsName] = JSON.stringify(settings);
  },

  clearSettings() {
    localStorage.removeItem(settingsName);
  },
};

export default WebLogSettings;
