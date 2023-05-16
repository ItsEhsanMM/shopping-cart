import React, { useEffect, useState, createContext } from "react";

// API
import api from "../api/api";

const productsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get product
    const getProducts = async () => {
      setProducts(await api());
    };

    getProducts();
  }, []);

  return (
    <productsContext.Provider value={products}>
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;