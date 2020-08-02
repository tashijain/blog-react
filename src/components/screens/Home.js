import React from "react";
import Header from "../parts/Header";
import IntroCarousel from "../parts/IntroCarousel";
import TrendingPosts from "../parts/TrendingPosts";
import FreshStories from "../parts/FreshStories";
import Footer from "../parts/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <IntroCarousel />
      <TrendingPosts />
      <FreshStories />
      <Footer />
    </>
  );
};

export default Home;
