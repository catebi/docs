const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let repo = "Catebi.Api";
  let url = `https://raw.githubusercontent.com/catebi/${repo}/main/README.md`;

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "text", // we’ll parse JSON for you
  });
};
