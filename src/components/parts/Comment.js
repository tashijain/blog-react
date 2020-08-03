import React from "react";
import Reply from "./Reply";

const Comment = ({ personName, date, desc, imgUrl }) => {
  return (
    <li class="comments__list-item">
      <img class="comments__list-item-image" src={imgUrl} alt="" />
      <div class="comments__list-item-content">
        <h3 class="comments__list-item-title">{personName}</h3>
        <span class="comments__list-item-date">Posted {date}</span>
        <Reply />
        <p class="comments__list-item-description">{desc}</p>
      </div>
    </li>
  );
};

export default Comment;
