import React from 'react';
import Post from './1Post';


function Blog() {
  return (
    <article className="blog active" data-page="blog">
  <header>
    <h2 className="h2 article-title">Blog</h2>
  </header>
  <section className="blog-posts">
    <ul className="blog-posts-list">
      <Post />
    </ul>
  </section>
</article>
  );
}

export default Blog;