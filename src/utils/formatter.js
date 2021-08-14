const formatter = (contents) => ({
  getPosts: () => contents,
  getPost: slug => contents.find(post => post.slug === slug),
  postCount: contents.length,
});

export default formatter;
