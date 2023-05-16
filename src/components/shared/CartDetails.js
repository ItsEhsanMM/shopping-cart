import React, { useContext } from "react";

// function
import { shorten } from "../../helper/functions";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Context
import { CartContext } from "../../context/CartContextProvider";

const CartDetails = ({ data }) => {
   const { image, title, price, quantity } = data;

   const { dispatch } = useContext(CartContext);

   return (
      <div>
         <img src={image} alt="product" style={{ width: "100px" }} />
         <div>
            <h2>{shorten(title)}</h2>
            <h3>{price} $</h3>
         </div>
         <div>
            <span>{quantity}</span>
         </div>
         <div>
            {quantity === 1 ? (
               <button
                  onClick={() => dispatch({ type: "REMOVE", payload: data })}
               >
                  <img src={trashIcon} alt="remove"  style={{width: '10px'}}/>
               </button>
            ) : (
               <button
                  onClick={() => dispatch({ type: "DECREASE", payload: data })}
               >
                  -
               </button>
            )}
            <button
               onClick={() => dispatch({ type: "INCREASE", payload: data })}
            >
               +
            </button>
         </div>
      </div>
   );
};

export default CartDetails;
