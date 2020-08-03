import React from "react";
import PostCategory from "./PostCategory";
import RelatedPosts from "./RelatedPosts";
import SocialIcon from "./SocialIcon";

const PostDesc = () => {
  return (
    <>
      <div className="title-single-post">
        <PostCategory type="Technology" />
        <h1>Canadian Undergrad tech Conference</h1>
        <ul className="post-tags">
          <li>1 week ago</li>
          <li>
            <a href="/#">12 comments</a>
          </li>
        </ul>
      </div>
      <div className="single-post-content">
        <img src="images/cutc.png" alt="" />
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
              Welcome to the world of virtual conferences! What’s better than to
              attend Canada’s largest and longest-running student-organized
              conference from the comforts of my home without any travel and
              accommodation hassles.
            </p>
            <p>
              As a student in tech, I have attended a number of tech conferences
              in the States, but never knew we had such a good one right here in
              Canada! And, trust me this one’s worth attending. Listening to
              such honest, candid, and enthralling conversations from amazing
              individuals from such diverse backgrounds has been priceless.
            </p>
            <blockquote>
              “ When you’re not good at something, you start to love it.”
            </blockquote>
            <p>
              This advice stood out to me quite a bit, since when you’re not
              good at something you really start enjoying the process of
              learning more about it. The happiness you get after achieving that
              seemingly impossible task is unmatchable.
            </p>
            <h3>Life After Uni Panel</h3>
            <p>
              Imposter syndrome is usually just a result of misaligned
              expectations you have and you think your colleagues have from you.
              Best way to overcome it is to talk it out, ask for feedback, trust
              in yourself, and stay grounded. With everything moving online,
              it’s more important than ever to show your enthusiasm and
              authenticity the right way. Be proactive, research the other
              person/company you’re talking to, and start the conversation on
              the right note. To create connections, don’t just branch out wide
              and create aimless connections, follow-up, and invest in existing
              ones too.
            </p>
            <div className="image-alt-box">
              <div className="image-holder">
                <img src="images/cutc3.png" height="100%" alt="" />
                <span>CUTC Reconnect 2020</span>
              </div>
              <div className="image-holder">
                <img src="images/cutc4.png" height="100%" alt="" />
                <span>Conference Day 2020</span>
              </div>
            </div>
            <p>
              The most crucial part of any conference. Being a virtual
              experience, this is the area where things start to feel
              challenging. I need to connect. Okay. But how do I establish a
              rapport virtually? How do I even “meet” people? Well easy, start
              looking for ways to do it virtually! What more, that awkward
              moment where you forget the person’s name, can’t ask it again,
              forgot to note down? That will not happen with every detail right
              on your screen. Join the Discord/Slack channels, connect with
              people you relate to over LinkedIn. Don’t just accept or send
              connection requests. Actually talk to people. Use the networking
              spaces on Hopin to randomly meet people. Grab the opportunity to
              connect to the panelists, speakers, and fellow attendees right at
              the moment. I met some amazing people by just taking that
              initiative to connect. There is something to learn from every
              single person, so talk, make friends and enjoy the ride.
            </p>

            <p>
              That’s about it! Being a virtual conference this year my
              experience would be way different than someone who attended it
              in-person, but at the end of the day, opportunities are what you
              make of them. I miss travelling to places to attend such
              conferences too but this has been a new experience altogether.
              Looking forward to (hopefully) an in-person CUTC 2021. Till then,
              let me know if you have any questions or want to chat more about
              it!
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
              <a href="single-post.html">Canadian Conferences</a>
            </h2>
          </div>
          <div className="next-box">
            <a className="text-link next-link" href="/#">
              Next Post <i className="fa fa-angle-right"></i>
            </a>
            <h2>
              <a href="single-post.html">Tech conferences</a>
            </h2>
          </div>
        </div>
        <RelatedPosts />
      </div>
    </>
  );
};

export default PostDesc;
