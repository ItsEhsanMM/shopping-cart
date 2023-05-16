import React, { useContext } from "react";

//components
import Product from "../shared/Product";

//context
import { productsContext } from "../context/ProductsContextProvider";

const Store = () => {
  const products = useContext(productsContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {products.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Store;
