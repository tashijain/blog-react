import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../parts/Breadcrumb";
import Sidebar from "../parts/Sidebar";
import Footer from "../parts/Footer";
import Posts from "../parts/Posts";

const Category = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
