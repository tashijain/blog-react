import React from "react";

const Comment = () => {
  return (
    <>
      <div class="comments">
        <h2 class="comments-title">2 Comments</h2>
        <ul class="comments__list">
          <li class="comments__list-item">
            <img
              class="comments__list-item-image"
              src="upload/single/th1.jpg"
              alt=""
            />
            <div class="comments__list-item-content">
              <h3 class="comments__list-item-title">Philip W</h3>
              <span class="comments__list-item-date">
                Posted October 7, 2018
              </span>
              <a class="comments__list-item-reply" href="/#">
                <i class="la la-mail-forward"></i>
                Reply
              </a>
              <p class="comments__list-item-description">
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.
              </p>
            </div>
          </li>
          <li class="comments__list-item">
            <img
              class="comments__list-item-image"
              src="upload/single/th2.jpg"
              alt=""
            />
            <div class="comments__list-item-content">
              <h3 class="comments__list-item-title">Philip W</h3>
              <span class="comments__list-item-date">
                Posted October 7, 2018
              </span>
              <a class="comments__list-item-reply" href="/#">
                <i class="la la-mail-forward"></i>
                Reply
              </a>
              <p class="comments__list-item-description">
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <form class="contact-form" id="comment-form">
        <h2 class="contact-form__title">Write a Comment</h2>
        <div class="row">
          <div class="col-md-6">
            <input
              class="contact-form__input-text"
              type="text"
              name="name"
              id="name"
              placeholder="Name:"
            />
          </div>
          <div class="col-md-6">
            <input
              class="contact-form__input-text"
              type="text"
              name="mail"
              id="mail"
              placeholder="Email:"
            />
          </div>
        </div>
        <textarea
          class="contact-form__textarea"
          name="comment"
          id="comment"
          placeholder="Comment"
        ></textarea>
        <input
          class="contact-form__submit"
          type="submit"
          name="submit-contact"
          id="submit_contact"
          value="Send Comment"
        />
      </form>
    </>
  );
};

export default Comment;
