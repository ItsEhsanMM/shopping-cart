import React, { useContext } from "react";

//components
import Product from "./shared/Product";

//context
import { productsContext } from "../context/ProductsContextProvider";

// Styles
import styles from './Store.module.scss'

const Store = () => {
   const products = useContext(productsContext);

   return (
      <div className={styles.container}>
         {products.map((item) => (
            <Product key={item.id} data={item} />
         ))}
      </div>
   );
};

export default Store;
