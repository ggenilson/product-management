import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import "boxicons/css/boxicons.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import User from "./pages/User";
import "./scss/App.scss";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <NotificationsProvider position="top-right">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Blank />} />
              <Route path="/dashboard" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Product />} />
                <Route path="users" element={<User />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
