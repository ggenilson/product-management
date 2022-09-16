import React from "react";
import "./style.scss";

type DashboardWrapperProps = {
  children: React.ReactNode;
  type?: "main" | "right";
};

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({
  type,
  children,
}) => {
  const classNameType = type ? `__${type}` : "";

  return <div className={`dashboard-wrapper${classNameType}`}>{children}</div>;
};

export default DashboardWrapper;
