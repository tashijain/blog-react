import React from "react";
import PostCategory from "./PostCategory";

const SidebarLatestStory = ({ type, title, days, comments }) => {
  return (
    <li>
      <PostCategory type={type} />
      <h2>
        <a href="single-post.html">{title}</a>
      </h2>
      <ul className="post-tags">
        <li>{days} days ago</li>
        <li>
          <a href="/#">{comments} comments</a>
        </li>
      </ul>
    </li>
  );
};

export default SidebarLatestStory;
