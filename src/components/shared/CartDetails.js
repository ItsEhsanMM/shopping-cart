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
         <img src={image} alt="product" style={{ width: "100px" }} />
         <div>
            <h2>{shorten(title)}</h2>
            <h3>{price} $</h3>
         </div>
         <div className={Styles.spanaBtn}>
            <div>
               <span>{quantity}</span>
            </div>
            <div className={Styles.buttons}>
               {quantity === 1 ? (
                  <button onClick={() => dispatch({ type: "REMOVE", payload: data })}>
                     <img src={trashIcon} alt="remove" style={{ width: "10px" }} />
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
   );
};

export default CartDetails;
