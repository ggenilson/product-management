import "boxicons/css/boxicons.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import "./scss/App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
