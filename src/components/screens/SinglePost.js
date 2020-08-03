import React from "react";
import Comments from "../parts/Comments";
import PostDesc from "../parts/PostDesc";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

const SinglePost = () => {
  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <PostDesc />
        <Comments />
      </div>
      <Footer />
    </>
  );
};

export default SinglePost;
