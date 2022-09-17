import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sidebarNav from "../../configs/sidebar-nav";
import "./style.scss";

type SidebarProps = {
  onCloseSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onCloseSidebar }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const routes = window.location.pathname.split("/");

    const routesLength = routes.length;

    if (routesLength) {
      const currentPath = routes[routesLength - 1];

      const activeItem = sidebarNav.findIndex(
        (item) => item.section === currentPath
      );

      setActiveIndex(!currentPath ? 0 : activeItem);
    }
  }, [location]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user-info");

    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h2 className="sidebar__title">Manager</h2>
        <div className="sidebar-close" onClick={onCloseSidebar}>
          <i className="bx bx-x" />
        </div>
      </div>
      <div className="sidebar__menu">
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`sidebar__menu__item ${
              activeIndex === index && "active"
            }`}
            onClick={onCloseSidebar}
          >
            <div className="sidebar__menu__item__icon">{nav.icon}</div>
            <div className="sidebar__menu__item__txt">{nav.text}</div>
          </Link>
        ))}
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
            <i className="bx bx-log-out" />
          </div>
          <div className="sidebar__menu__item__txt" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
