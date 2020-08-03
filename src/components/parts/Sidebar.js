import React from "react";
import SidebarSocialIcon from "./SidebarSocialIcon";
import Title from "./Title";
import SidebarLatestStory from "./SidebarLatestStory";
import SidebarCategory from "./SidebarCategory";

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="widget social-widget">
          <ul className="social-list">
            <SidebarSocialIcon
              nameForClass="fa fa-facebook"
              text="facebook"
              likes="25"
            />
            <SidebarSocialIcon
              nameForClass="fa fa-twitter"
              text="twitter"
              likes="31"
            />
            <SidebarSocialIcon
              nameForClass="fa fa-instagram"
              text="instagram"
              likes="35"
            />
          </ul>
        </div>

        <div className="widget category-widget">
          <Title title="Categories" />
          <ul className="category-list">
            <SidebarCategory category="Travel" num="8" />
            <SidebarCategory category="Tech" num="5" />
            <SidebarCategory category="Nature" num="4" />
          </ul>
        </div>

        <div className="widget list-widget">
          <Title title="Latest Stories" />
          <ul className="list-posts">
            <SidebarLatestStory
              type="Food"
              title="Breakfast Specialities."
              days="2"
              comments="0"
            />
            <SidebarLatestStory
              type="Travel"
              title="Italy"
              days="3"
              comments="4"
            />
            <SidebarLatestStory
              type="Food"
              title="Lunch Specialities."
              days="4"
              comments="5"
            />
            <SidebarLatestStory
              type="Tech"
              title="Conferences"
              days="5"
              comments="6"
            />
            <SidebarLatestStory
              type="Food"
              title="Dinner Specialities."
              days="3"
              comments="2"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
