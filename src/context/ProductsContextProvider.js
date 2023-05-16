import React, { useEffect, useState, createContext } from "react";

// API
import {fetchProducts} from "../service/api";

export const productsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get products
    const getProducts = async () => {
      setProducts(await fetchProducts());
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