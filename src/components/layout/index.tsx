import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import TopNav from "../top-nav";
import "./style.scss";

const MainLayout: React.FC = () => {
  const [sidebarStatus, setSidebarStatus] = useState("");

  const onOpenSidebar = () => {
    setSidebarStatus("opened");
  };

  const onCloseSidebar = () => {
    setSidebarStatus("closed");

    setTimeout(() => {
      setSidebarStatus("");
    }, 500);
  };

  return (
    <div className={`${sidebarStatus}`}>
      <Sidebar onCloseSidebar={onCloseSidebar} />
      <div className="main">
        <div className={`main__content ${sidebarStatus}`}>
          <TopNav onOpenSidebar={onOpenSidebar} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
