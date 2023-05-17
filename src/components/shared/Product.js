import React, { useContext } from "react";
import { Link } from "react-router-dom";

//function
import { shorten, isAdded, quantityCount } from "../../helper/functions";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Icons
import trashIcon from "../../assets/icons/trash.svg";
import plusIcon from "../../assets/icons/plus.svg";
import minusIcon from "../../assets/icons/minus.svg";

// Styles
import styles from "./Product.module.scss";

const Product = ({ data }) => {
   const { state, dispatch } = useContext(CartContext);

   return (
      <div className={styles.container}>
         <div className={styles.imageContainer}>
            <img src={data.image} alt="product" />
         </div>

         <div className={styles.labelContainer}>
            <h2>{shorten(data.title)}</h2>
            <p>{data.price} $</p>
         </div>

         <div className={styles.bottomContainer}>
            <div className={styles.aContainer}>
               <Link to={`/products/${data.id}`}>Detail</Link>
            </div>

            <div className={styles.buttonContainer}>
               {quantityCount(state, data.id) > 1 && (
                  <button
                     className={styles.decrease}
                     onClick={() =>
                        dispatch({
                           type: "DECREASE",
                           payload: data,
                        })
                     }
                  >
                     <img src={minusIcon} alt="decrease" />
                  </button>
               )}

               {quantityCount(state, data.id) === 1 && (
                  <button
                     className={styles.remove}
                     onClick={() =>
                        dispatch({
                           type: "REMOVE",
                           payload: data,
                        })
                     }
                  >
                     <img src={trashIcon} alt="remove" />
                  </button>
               )}
               {quantityCount(state, data.id) > 0 && <span>{quantityCount(state, data.id)}</span>}

               {isAdded(state, data.id) ? (
                  <button
                     className={styles.increase}
                     onClick={() =>
                        dispatch({
                           type: "INCREASE",
                           payload: data,
                        })
                     }
                  >
                     <img src={plusIcon} alt="add more" />
                  </button>
               ) : (
                  <div className={styles.addContainer}>
                  <button
                     className={styles.bigButton}
                     onClick={() =>
                        dispatch({
                           type: "ADD_ITEM",
                           payload: data,
                        })
                     }
                  >
                     Add Item
                  </button>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Product;
