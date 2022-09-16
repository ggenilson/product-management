import React from "react";
import UserInfo from "../user-info";
import "./style.scss";

const TopNav: React.FC = () => {
  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  };

  return (
    <div className="topnav">
      <UserInfo />
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right" />
      </div>
    </div>
  );
};

export default TopNav;
