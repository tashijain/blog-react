import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Header />

      <section class="error-section">
        <div class="container">
          <div class="error-box">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
              We are sorry, but the page you are looking for cannot be found.{" "}
            </p>
            <Link to="/" className="button-one">
              Go To HomePage
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Error;
