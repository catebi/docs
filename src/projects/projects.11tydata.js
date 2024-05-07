module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: function (data) {
        return this.slugify(data.repo);
      },
      parent: () => "project-docs",
    },
    title: (data) => data.repo,
  },
};
