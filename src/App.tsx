import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import "boxicons/css/boxicons.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import "./scss/App.scss";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Blank />} />
            <Route path="/dashboard" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
