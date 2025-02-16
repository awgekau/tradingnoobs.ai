// src/pages/StockSelectedPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const StockSelectedPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stock = queryParams.get("stock");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Stock Selected: {stock}</h1>
      <p>Details for {stock} go here.</p>
    </div>
  );
};

export default StockSelectedPage;
