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
              title="Summer is Here : What to Explore?"
              comments="4"
              days="2"
              author="Prashant D."
            />
            <CarouselElement
              image="upload/blog/home5/sl2.jpg"
              type="Lifestyle"
              title="Best locations for photoshoots this summer"
              comments="3"
              days="3"
              author="Kansas F."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCarousel;
