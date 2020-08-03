import React from "react";
import RelatedPost from "./RelatedPost";

const RelatedPosts = () => {
  return (
    <div className="related-box">
      <h2>Related Posts</h2>
      <div className="row">
        <RelatedPost
          type="leisure"
          image="upload/blog/p3.jpg"
          title="Movie time"
          author="Jane A."
          days="4"
        />
        <RelatedPost
          type="travel"
          image="upload/blog/p2.jpg"
          title="NYC"
          author="Arthur J"
          days="2"
        />
        <RelatedPost
          type="food"
          image="upload/blog/p1.jpg"
          title="Grilled cheese sandwich"
          author="Stan Lee"
          days="3"
        />
      </div>
    </div>
  );
};

export default RelatedPosts;
