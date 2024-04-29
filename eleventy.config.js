const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/")
  eleventyConfig.addWatchTarget("./src/css/")
  eleventyConfig.addPassthroughCopy("./src/js/")
  eleventyConfig.addWatchTarget("./src/js/")

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
