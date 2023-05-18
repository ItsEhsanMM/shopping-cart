import React, { useContext } from "react";

// function
import { shorten } from "../../helper/functions";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Styles
import Styles from "./CartDetail.module.scss";

const CartDetails = ({ data }) => {
   const { image, title, price, quantity } = data;

   const { dispatch } = useContext(CartContext);

   return (
      <div className={Styles.container}>
         <div className={Styles.imgContainer}>
         <img src={image} alt="product" style={{ width: "100px" }} />
         </div>
         <div className={Styles.second}>
         <div className={Styles.labelContainer}>
            <h2 className={Styles.title}>{shorten(title)}</h2>
            <h3 className={Styles.price}>{price} $</h3>
         </div>
         <div className={Styles.spanaBtn}>
            <div>
               <span className={Styles.quantity}>{quantity}</span>
            </div>
            <div className={Styles.buttons}>
               {quantity === 1 ? (
                  <button className={Styles.trash} onClick={() => dispatch({ type: "REMOVE", payload: data })}>
                     <img className={Styles.trashimg} src={trashIcon} alt="remove" style={{ width: "10px" }} />
                  </button>
               ) : (
                  <button className={Styles.minus} onClick={() => dispatch({ type: "DECREASE", payload: data })}>
                     -
                  </button>
               )}
               <button className={Styles.plus} onClick={() => dispatch({ type: "INCREASE", payload: data })}>
                  +
               </button>
            </div>
         </div>
         </div>
      </div>
   );
};

export default CartDetails;
