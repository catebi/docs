const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports.data = {
  pagination: {
    data: "repos",
    size: 1,
    alias: "repo"
  },
  repos: [
    "Catebi.Api",
    "FreeganBot",
    "Wordpress.Catebige",
  ],
  permalink: function (data) {
    return `projects/${this.slugify(data.repo)}/index.html`;
  },
  layout: "doc.njk",
};

module.exports.render = async function (data) {
  let url = `https://raw.githubusercontent.com/catebi/${data.repo}/main/README.md`;

  let readme = await EleventyFetch(url, {
    duration: "1d",
    type: "text",
  });

  return await this.renderTemplate(
    readme,
    "njk,md"
  )
};
