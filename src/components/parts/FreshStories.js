import React from "react";
import FreshStory from "./FreshStory";

const FreshStories = () => {
  return (
    <section className="fresh-section on-trend-mode">
      <div className="container">
        <div className="title-section text-center">
          <h1>Fresh Stories</h1>
        </div>
        <div className="fresh-box owl-wrapper">
          <div className="owl-carousel" data-num="2">
            <FreshStory
              image="upload/blog/home5/a2.jpg"
              days="2"
              title="Will travelling be back in the new-normal?"
              comments="4"
              author="John Smith"
              desc="The pandemic definitely ruined the summer plans for tons of people. 
              With summer being the only season for getaway, with beautiful weather 
              and water retreats, people find themselves trapped in the confines of their home"
              type="Travel"
            />
            <FreshStory
              image="upload/blog/home5/a3.jpg"
              days="2"
              title="Life during a pandemic - Treat your tastebuds"
              comments="4"
              author="Jake D."
              desc="The pandemic has forced people to stay at home for the protection of 
              the entire living race. With the given transition to being at home all day long, people
              have turned to spending quality time with their families, with majority time spent in the kitchen
              trying out new dishes"
              type="Food"
            />
            <FreshStory
              image="upload/blog/home5/a4.jpg"
              days="3"
              title="The essense of food plate decoration"
              comments="4"
              author="Jonathan M."
              desc="As much as we human beings love food, we are always very visual creatures.
              Hence anything that appears to our aesthetics make us wanting to try it out. 
              Food plate decoration targets this sense of aesthetics to please customers."
              type="Lifestyle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshStories;
