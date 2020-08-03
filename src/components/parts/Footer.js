import React from "react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="copyright-line">
          © Copyright 2020 - All rights reserved.
        </p>
        <ul className="social-list">
          <SocialIcon nameForClass="fa fa-github fa-lg" />
          <SocialIcon nameForClass="fa fa-linkedin fa-lg" />
          <SocialIcon nameForClass="fa fa-facebook fa-lg" />
          <SocialIcon nameForClass="fa fa-instagram fa-lg" />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
