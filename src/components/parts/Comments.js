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
            date="March 3, 2020"
            imgUrl="upload/single/th2.jpg"
            desc="Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti."
          />
          <Comment
            personName="Jacob A."
            date="June 7, 2020"
            imgUrl="upload/single/th1.jpg"
            desc="Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti."
          />
        </ul>
      </div>
      <CommentsFeedback />
    </>
  );
};

export default Comments;
