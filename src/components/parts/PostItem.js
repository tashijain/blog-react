import React from "react";
import PostCategory from "./PostCategory";

const PostItem = ({ image, name, num, days, dishName, desc, type }) => {
  return (
    <div className="news-post article-post2">
      <div className="row">
        <div className="col-md-6">
          <div className="image-holder">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <PostCategory type={type} />
          <h2>
            <a href="/#">{dishName}</a>
          </h2>
          <ul className="post-tags">
            <li>{days} days ago</li>
            <li>
              <a href="/#">{num} comments</a>
            </li>
            <li>
              by <a href="/#">{name}</a>
            </li>
          </ul>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
