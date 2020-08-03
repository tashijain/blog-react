import React from "react";
import Title from "./Title";

const CommentsFeedback = () => {
  return (
    <form className="contact-form" id="comment-form">
      <Title className="contact-form__title" title="Write a Comment" />
      <div className="row">
        <div className="col-md-6">
          <input
            className="contact-form__input-text"
            type="text"
            name="name"
            id="name"
            placeholder="Name:"
          />
        </div>
        <div className="col-md-6">
          <input
            className="contact-form__input-text"
            type="text"
            name="mail"
            id="mail"
            placeholder="Email:"
          />
        </div>
      </div>
      <textarea
        className="contact-form__textarea"
        name="comment"
        id="comment"
        placeholder="Comment"
      ></textarea>
      <input
        className="contact-form__submit"
        type="submit"
        name="submit-contact"
        id="submit_contact"
        value="Send Comment"
      />
    </form>
  );
};

export default CommentsFeedback;
