import React from "react";
import { Link } from "react-router-dom";

const NavbarElement = ({ title }) => {
  return (
    <li>
      <Link to="/">{title}</Link>
    </li>
  );
};

export default NavbarElement;
