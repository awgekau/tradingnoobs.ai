// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StockSelectedPage from "./pages/StockSelectedPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stock_selected_page" element={<StockSelectedPage />} />
    </Routes>
  );
};

export default App;
