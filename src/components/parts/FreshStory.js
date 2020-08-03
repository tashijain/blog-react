import React from "react";
import PostCategory from "./PostCategory";

const FreshStory = ({ image, type, days, title, comments, author, desc }) => {
  return (
    <div className="item">
      <div className="news-post article-post">
        <div className="image-holder">
          <img src={image} alt="" />
        </div>
        <PostCategory type={type} />
        <h2>
          <a href="/#">{title}</a>
        </h2>
        <ul className="post-tags">
          <li>{days} days ago</li>
          <li>
            <a href="/#">{comments} comments</a>
          </li>
          <li>
            by <a href="/#">{author}</a>
          </li>
        </ul>
        <p>
          {desc}
          {"..."}
        </p>
        <a className="text-link" href="/#">
          Read More
        </a>
      </div>
    </div>
  );
};

export default FreshStory;
