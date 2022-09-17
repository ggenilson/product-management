import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import "boxicons/css/boxicons.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout";
import AuthUserProvider from "./contexts/auth-user-context";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Product from "./pages/Product";
import User from "./pages/User";
import PrivateRoute from "./routes/private-route";
import "./scss/App.scss";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <NotificationsProvider position="top-right">
          <AuthUserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<MainLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route
                    path="products"
                    element={<PrivateRoute Component={Product} />}
                  />
                  <Route
                    path="users"
                    element={<PrivateRoute Component={User} />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </AuthUserProvider>
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
