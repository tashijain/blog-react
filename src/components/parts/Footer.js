import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="copyright-line">
          © Copyright 2020 - All rights reserved.
        </p>
        <ul className="social-list">
          <li>
            <a href="/#" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="/#" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="/#" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/#" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
