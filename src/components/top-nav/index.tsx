import React from "react";
import UserInfo from "../user-info";
import "./style.scss";

type TopNavProps = {
  onOpenSidebar: () => void;
};

const TopNav: React.FC<TopNavProps> = ({ onOpenSidebar }) => {
  return (
    <div className="topnav">
      <UserInfo />
      <div className="sidebar-toggle" onClick={onOpenSidebar}>
        <i className="bx bx-menu-alt-right" />
      </div>
    </div>
  );
};

export default TopNav;
