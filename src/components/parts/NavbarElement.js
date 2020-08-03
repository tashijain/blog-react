import React from "react";
import { Link } from "react-router-dom";

const NavbarElement = ({ title, linkTo }) => {
  return (
    <li>
      <Link to={linkTo}>{title}</Link>
    </li>
  );
};

export default NavbarElement;
