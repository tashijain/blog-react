import React from "react";
import Comment from "./Comment";
import CommentsFeedback from "./CommentsFeedback";

const Comments = () => {
  return (
    <>
      <div className="comments">
        <h2 className="comments-title">2 Comments</h2>
        <ul className="comments__list">
          <Comment
            personName="Philip W."
            date="July 10, 2020"
            imgUrl="upload/single/th2.jpg"
            desc="Amazing article! Really helped me feel like I was present in the conference."
          />
          <Comment
            personName="Jacob A."
            date="July 7, 2020"
            imgUrl="upload/single/th1.jpg"
            desc="Way to go! Superb article, loved reading it!"
          />
        </ul>
      </div>
      <CommentsFeedback />
    </>
  );
};

export default Comments;
