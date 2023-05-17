import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//API
import { productsContext } from "../context/ProductsContextProvider";

// Styles
import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
   const data = useContext(productsContext);
   const param = useParams().id;
   const newData = data.filter((item) => item.id === param - 0);

   if (newData.length === 0) {
      return <h1>Loading...</h1>;
   } else {
      const { image, title, description, category, price } = newData[0];

      return (
         <div className={styles.container}>
            <div className={styles.sContainer}>
               <div className={styles.imgContainer}>
               <img src={image} alt="product" style={{ width: "200px" }} />
               </div>

               <div className={styles.labelContainer}>
                  <h3>{title}</h3>
                  <p className={styles.description}>{description}</p>
                  <div className={styles.sLabelContainer}>
                  <p className={styles.category}>
                     <span>category :</span> {category}
                  </p>
                     <p className={styles.price}>{price} $</p>
                     </div>
                  <div className={styles.aContainer}>
                     <Link to="/">Back to product</Link>
                  </div>
               </div>
            </div>
         </div>
      );
   }
};

export default ProductDetail;
