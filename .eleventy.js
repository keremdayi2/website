module.exports = function(eleventyConfig) {
  return {
    markdownTemplateEngine: "njk", // Ensures Markdown is processed correctly
    dir: {
      input: "src",
      output: "dist"
    }
  };
};