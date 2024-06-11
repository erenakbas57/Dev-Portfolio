import React from "react";


function Post() {
    return (
        <li className="blog-post-item">
        <a href="127.0.0.1">
          <figure className="blog-banner-box">
            <img
              src="./assets/images/blog-1.jpg"
              alt="Design conferences in 2022"
              loading="lazy"
            />
          </figure>
          <div className="blog-content">
            <div className="blog-meta">
              <p className="blog-category">Design</p>
              <span className="dot" />
              <time dateTime="2022-02-23">Fab 23, 2022</time>
            </div>
            <h3 className="h3 blog-item-title">Design conferences in 2022</h3>
            <p className="blog-text">
              Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
            </p>
          </div>
        </a>
      </li>
    );
}

export default Post;