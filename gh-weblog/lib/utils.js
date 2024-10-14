export default {
  /**
   * Clean up a title so that it'll look good as a vanity URL.
   */
  titleReplace(title) {
    return title
      .replace(/[\s\:;,_.'"#!?\u2010-\u2015]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-/, "")
      .replace(/-$/, "")
      .replaceAll(`<`, "")
      .replaceAll(`>`, "")
      .toLowerCase();
  },
};
