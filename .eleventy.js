module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    markdownTemplateEngine: "njk", // Ensures Markdown is processed correctly
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
