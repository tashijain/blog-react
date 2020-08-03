import React from "react";
import PostCategory from "./PostCategory";
import RelatedPosts from "./RelatedPosts";
import SocialIcon from "./SocialIcon";

const PostDesc = () => {
  return (
    <>
      <div className="title-single-post">
        <PostCategory type="Nature" />
        <h1>Vivamus vestibulum ntulla necante.</h1>
        <ul className="post-tags">
          <li>1 week ago</li>
          <li>
            <a href="/#">3 comments</a>
          </li>
        </ul>
      </div>
      <div className="single-post-content">
        <img src="upload/single/4.jpg" alt="" />
        <div className="post-content">
          <div className="post-social">
            <span>Share</span>
            <ul className="share-post">
              <SocialIcon nameForA="facebook" nameForClass="fa fa-facebook" />
              <SocialIcon nameForA="twitter" nameForClass="fa fa-twitter" />
              <SocialIcon nameForA="pinterest" nameForClass="fa fa-pinterest" />
            </ul>
          </div>
          <div className="post-content-text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula <a href="/#">sollicitudin laoreet viverra</a>, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.
            </p>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent{" "}
              <a href="/#">elementum hendrerit </a> tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <blockquote>
              “ Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
              euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
              consequat. ”
            </blockquote>
            <p>
              Praesent elementum hendrerit tortor. Sed semper lorem at felis.
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              dui, eu <a href="/#">pulvinar nunc sapien</a> ornare nisl.
              Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <h3>Nulla vitae mauris non felis mollis faucibus.</h3>
            <p>
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,{" "}
              <a href="/#">adipiscing varius </a>, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
              Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
              Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <div className="image-alt-box">
              <div className="image-holder">
                <img src="upload/single/2.jpg" alt="" />
                <span>Nulla sed leo.</span>
              </div>
              <div className="image-holder">
                <img src="upload/single/3.jpg" alt="" />
                <span>Fusce lacinia arcu et nulla.</span>
              </div>
            </div>
            <p>
              Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
              pulvinar risus, vitae facilisis libero dolor a purus. Sed vel
              lacus. Mauris nibh felis, adipiscing varius, adipiscing in,
              lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque
              mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae,
              ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
              vulputate vel, nisl.
            </p>

            <p>
              Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
              diam sit amet mi ullam corper vehicula. Integer adipiscing risus a
              sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem
              lacus, accumsan quis, faucibus non, congue vel, arcu. Ut
              scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris
              eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus
              imperdiet nibh feugiat est.
            </p>
            <div className="share-tags-box">
              <ul className="tags">
                <li>
                  <a href="/#">travel</a>
                </li>
                <li>
                  <a href="/#">adventure</a>
                </li>
                <li>
                  <a href="/#">lifestyle</a>
                </li>
              </ul>
              <ul className="shares-likes">
                <SocialIcon
                  text="Like"
                  nameForA="likes"
                  nameForClass="fa fa-heart-o"
                  number="14"
                />
                <SocialIcon
                  nameForA="facebook"
                  nameForClass="fa fa-facebook"
                  number="23"
                />
                <SocialIcon
                  nameForA="twitter"
                  nameForClass="fa fa-twitter"
                  number="5"
                />
                <SocialIcon
                  nameForA="pinterest"
                  nameForClass="fa fa-pinterest"
                  number="2"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="prev-next-box">
          <div className="prev-box">
            <a className="text-link" href="/#">
              <i className="fa fa-angle-left"></i> Previous Post
            </a>
            <h2>
              <a href="single-post.html">Sed adipiscing ornare risus.</a>
            </h2>
          </div>
          <div className="next-box">
            <a className="text-link next-link" href="/#">
              Next Post <i className="fa fa-angle-right"></i>
            </a>
            <h2>
              <a href="single-post.html">Quisque a lectus.</a>
            </h2>
          </div>
        </div>
        <RelatedPosts />
      </div>
    </>
  );
};

export default PostDesc;
