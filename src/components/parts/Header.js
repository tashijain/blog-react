import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="clearfix header-style5">
      <div className="logo-place">
        <div className="container">
          <div className="inner-logo-place">
            <h1 className="headerTitle">Tashi's Blog</h1>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
