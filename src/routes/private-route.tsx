import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  Component: React.FC;
};

const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  const localUserInfo = localStorage.getItem("product-management-user-data");

  return localUserInfo ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
