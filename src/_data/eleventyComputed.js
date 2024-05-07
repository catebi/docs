module.exports = {
  eleventyNavigation: {
    key: function (data) {
      return this.slugify(data.title);
    },
    title: (data) => data.title,
    parent: (data) => data.parent
  }
}
