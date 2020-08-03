import React from "react";
import RelatedPost from "./RelatedPost";

const TrendingPosts = () => {
  return (
    <section className="top-home-section">
      <div className="container">
        <div className="title-section text-center">
          <h1>Trending Posts</h1>
        </div>
        <div className="top-home-box">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="news-post image-post">
                <img src="upload/blog/home5/a1.jpg" alt="" />
                <div className="hover-post">
                  <a className="category-link" href="/#">
                    Lifestyle
                  </a>
                  <h2>
                    <a href="single-post.html">Praesent placerat quiseros.</a>
                  </h2>
                  <ul className="post-tags">
                    <li>3 days ago</li>
                    <li>
                      <a href="/#">2 comments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <RelatedPost
                      type="food"
                      image="upload/blog/home2/m4.jpg"
                      title="Aliquam tincidunt mauriseu"
                      author="Stan Enemy"
                      days="2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <RelatedPost
                      type="lifestyle"
                      image="upload/blog/home2/m5.jpg"
                      title="Aliquam tincidunt mauriseu"
                      author="Stan Enemy"
                      days="2"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <RelatedPost
                      type="food"
                      image="upload/blog/home2/m6.jpg"
                      title="Aliquam tincidunt mauriseu"
                      author="Stan Enemy"
                      days="2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news-post standard-post left-align">
                    <RelatedPost
                      type="lifestyle"
                      image="upload/blog/home2/m7.jpg"
                      title="Aliquam tincidunt mauriseu"
                      author="Stan Enemy"
                      days="2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingPosts;
