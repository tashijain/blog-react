import React from "react";
import NavbarElement from "./NavbarElement";
import SocialIcon from "./SocialIcon";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="search-button" href="/#">
            <i className="fa fa-search"></i>
          </a>
          <form className="form-search">
            <input type="search" placeholder="Search:" />
          </form>
          <ul className="navbar-nav m-auto">
            <NavbarElement title="Home" linkTo="/" />
            <NavbarElement title="All Posts" linkTo="/category" />
            <NavbarElement title="Tech" linkTo="/singlepost" />
            <NavbarElement title="Travel" linkTo="/singlepost" />
            <NavbarElement title="Nature" linkTo="/singlepost" />
          </ul>
          <ul className="navbar-nav ml-auto social-list">
            <SocialIcon nameForClass="fa fa-github fa-lg" />
            <SocialIcon nameForClass="fa fa-linkedin fa-lg" />
            <SocialIcon nameForClass="fa fa-facebook fa-lg" />
            <SocialIcon nameForClass="fa fa-instagram fa-lg" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
