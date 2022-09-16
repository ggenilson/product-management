import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import TopNav from "../topnav";
import "./style.scss";

const MainLayout: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
