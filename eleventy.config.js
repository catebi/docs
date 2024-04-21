const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/")
  eleventyConfig.addWatchTarget("./src/css/")
  eleventyConfig.addPassthroughCopy("./src/js/")
  eleventyConfig.addWatchTarget("./src/js/")

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
