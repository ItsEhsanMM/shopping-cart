import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//component
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";

//context
import ProductsContextProvider from "./context/ProductsContextProvider";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/products" element={<Store />} />
        <Route path="/*" element={<Navigate to="/products" />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </ProductsContextProvider>
  );
};

export default App;
