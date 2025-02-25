module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    markdownTemplateEngine: "njk", 
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
