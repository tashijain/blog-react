import React from "react";
import PostCategory from "./PostCategory";

const RelatedPost = ({ type, image, title, author, days }) => {
  return (
    <>
      <div className="image-holder">
        <a href="/#">
          <img src={image} alt="" />
        </a>
      </div>
      <PostCategory type={type} />
      <h2>
        <a href="/#">{title}</a>
      </h2>
      <ul className="post-tags">
        <li>
          by <a href="/#">{author}</a>
        </li>
        <li>{days} days ago</li>
      </ul>
    </>
  );
};

export default RelatedPost;
