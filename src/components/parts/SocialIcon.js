import React from "react";

const SocialIcon = ({ nameForClass, number, nameForA, text }) => {
  return (
    <li>
      <a href="/#" className={nameForA}>
        {text} <i className={nameForClass}></i> {number}
      </a>
    </li>
  );
};

export default SocialIcon;
