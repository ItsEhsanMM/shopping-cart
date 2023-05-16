import React, { useContext } from "react";

// Component
import CartDetails from "./shared/CartDetails";

// Context
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

const Cart = () => {
   const { state, dispatch } = useContext(CartContext);

   return (
      <>
         <div>
            <div>
               {state.selectedItem.map((item) => (
                  <CartDetails key={item.id} data={item} />
               ))}
            </div>
            {state.itemCounter > 0 && (
               <div>
                  <p>total items: {state.itemCounter}</p>
                  <p>total price: {state.total} $</p>
                  <div>
                     <button onClick={() => dispatch({ type: "CLEAR", payload: state })}>Clear</button>
                     <button onClick={() => dispatch({ type: "CHECKOUT", payload: state })}>CheckOut</button>
                  </div>
               </div>
            )}

            {state.checkout && (
               <div>
                  <p>checkout successfuly</p>
                  <Link to="/products">Buy More</Link>
               </div>
            )}

            {!state.checkout && state.itemCounter === 0 && (
               <div>
                  <p>Want to buy?</p>
                  <Link to="/products">Back to shop</Link>
               </div>
            )}
         </div>
      </>
   );
};

export default Cart;
