const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports.data = {
  pagination: {
    data: "repos",
    size: 1,
    alias: "repo",
    addAllPagesToCollections: true,
  },
  repos: [
    "Catebi.Api",
    "FreeganBot",
    "Wordpress.Catebige",
    "docs",
  ],
  permalink: function (data) {
    return `projects/${this.slugify(data.repo)}/index.html`;
  },
  layout: "doc.njk",
  parent: "project-docs",
  eleventyComputed: {
    title: (data) => data.repo,
  },
};

module.exports.render = async function (data) {
  let url = `https://raw.githubusercontent.com/catebi/${data.repo}/main/README.md`;

  let readme = await EleventyFetch(url, {
    duration: "1d",
    type: "text",
  });

  return await this.renderTemplate(
    readme,
    "md"
  )
};
