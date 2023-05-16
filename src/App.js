import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//component
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";

//context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="/products" />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
