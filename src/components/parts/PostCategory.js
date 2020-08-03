import React from "react";

const PostCategory = ({ type }) => {
  return (
    <a className="text-link" href="/#">
      {type}
    </a>
  );
};

export default PostCategory;
