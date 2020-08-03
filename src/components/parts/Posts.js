import React from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";

const Posts = () => {
  return (
    <div className="col-lg-8">
      <div className="blog-box list-style">
        <PostItem
          image="upload/blog/f1.jpg"
          name="John Smith"
          num="3"
          days="2"
          dishName="Banana Bread with Cherries"
          desc="Super-moist texture, low-fat butter, perfectly riped bananas, with brown sugar
          and almond flour, stuffed with delicious walnuts and raisins, this is the best banana
          bread you'll ever taste in your life."
          type="breakfast"
        />
        <PostItem
          image="upload/blog/f2.jpg"
          name="Jane Austin"
          num="4"
          days="4"
          dishName="Fresh-baked Donuts"
          desc="Savour our exotic dishes that would leave you spellbound. Prepared
          exclusively by our world-class chefs, our ingredients have been
          chosen from the finest places across the globe."
          type="All Day snack"
        />
        <PostItem
          image="upload/blog/f6.jpg"
          name="Anjie Desouza"
          num="2"
          days="5"
          dishName="Cheese, Nuts, Fresh Fruits"
          desc="Fruits are hand-picked with care from our very own farms to ensrure high 
          quality, sustainibilty, and freshness guranteed. Cheese is exported from the best
          parts of the world."
          type="All Day snack"
        />
        <PostItem
          image="upload/blog/f4.jpg"
          name="Chinmaya Singh"
          num="5"
          days="3"
          dishName="Blueberry Fluffy Pancakes"
          desc="These thin and fluffy pancakes are one of our signature dishes. Topped with blueberries and maple syrup,
           they are bound to leave you wanting them everyday."
          type="breakfast"
        />
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;
