import React from "react";

const SidebarSocialIcon = ({ nameForClass, text, likes }) => {
  return (
    <li>
      <a href="/#">
        <i className={nameForClass}></i>
        {text}
        <span>{likes}k likes</span>
      </a>
    </li>
  );
};

export default SidebarSocialIcon;
