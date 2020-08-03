import React from "react";

const CarouselElement = ({ image, type, title, comments, days, author }) => {
  return (
    <div className="item">
      <div className="news-post image-post">
        <img src={image} alt="" />
        <div className="hover-post">
          <div>
            <a className="category-link" href="/#">
              {type}
            </a>
          </div>
          <h2>
            <a href="/#">{title}</a>
          </h2>
          <ul className="post-tags">
            <li>
              <a href="/#">{comments} comments</a>
            </li>
            <li>{days} days ago</li>
            <li>
              by <a href="/#">{author}</a>
            </li>
          </ul>
          <a className="white-button" href="/#">
            View Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselElement;
