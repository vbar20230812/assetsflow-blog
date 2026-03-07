const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  // Markdown configuration with full features
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  });
  eleventyConfig.setLibrary('md', md);

  // Pass through files that don't need processing
  eleventyConfig.addPassthroughCopy('src/static');
  eleventyConfig.addPassthroughCopy('src/admin');
  eleventyConfig.addPassthroughCopy('CNAME');

  // Watch targets
  eleventyConfig.addWatchTarget('src/static/css/');
  eleventyConfig.addWatchTarget('src/static/js/');

  // Filter: Format date
  eleventyConfig.addFilter('dateFormat', function(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Filter: Format date for Hebrew
  eleventyConfig.addFilter('dateFormatHe', function(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Filter: ISO date format (YYYY-MM-DD)
  eleventyConfig.addFilter('dateISO', function(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  });

  // Filter: Get posts by language
  eleventyConfig.addFilter('filterByLanguage', function(posts, lang) {
    return posts.filter(post => post.data.lang === lang);
  });

  // Collection: All blog posts
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/content/blog/**/*.md')
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Collection: Posts by language
  eleventyConfig.addCollection('postsHe', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/content/blog/**/*.md')
      .filter(post => post.data.lang === 'he')
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  eleventyConfig.addCollection('postsEn', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/content/blog/**/*.md')
      .filter(post => post.data.lang === 'en')
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};
