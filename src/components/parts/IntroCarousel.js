import React from "react";
import CarouselElement from "./CarouselElement";

const IntroCarousel = () => {
  return (
    <section className="top-slider-section fullscreen-slider">
      <div className="top-slider-box text-center">
        <div className="owl-wrapper">
          <div className="owl-carousel" data-num="1">
            <CarouselElement
              image="upload/blog/home5/sl1.jpg"
              type="Travel"
              title="Integer vitae libero acrisus egestas."
              comments="4"
              days="2"
              author="Eva H."
            />
            <CarouselElement
              image="upload/blog/home5/sl2.jpg"
              type="Lifestyle"
              title="Praesent placerat risus quis eros."
              comments="3"
              days="3"
              author="John Smith"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCarousel;
