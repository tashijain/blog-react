import React from "react";

const SocialIcon = ({ nameForClass }) => {
  return (
    <li>
      <a href="/#">
        <i className={nameForClass}></i>
      </a>
    </li>
  );
};

export default SocialIcon;
