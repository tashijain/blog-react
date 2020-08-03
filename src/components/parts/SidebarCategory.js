import React from "react";

const SidebarCategory = ({ category, num }) => {
  return (
    <li>
      <a href="/#">
        {category} <span>{num}</span>
      </a>
    </li>
  );
};

export default SidebarCategory;
