import React, { useContext } from "react";

// Component
import CartDetails from "./shared/CartDetails";

// Context
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

// Style
import styles from "./Cart.module.scss";

const Cart = () => {
   const { state, dispatch } = useContext(CartContext);

   return (
      <div className={styles.container}>
         <div className={styles.itemContainer}>
            {state.selectedItem.map((item) => (
               <CartDetails key={item.id} data={item} />
            ))}
         </div>
         <div className={styles.checkoutContainer}>
            {state.itemCounter > 0 && (
               <div className={styles.totalaBContainer}>
                  <div className={styles.pContainer}>
                     <p>
                        <span>total items:</span> {state.itemCounter}
                     </p>
                     <p>
                        <span>total price:</span> {state.total} $
                     </p>
                  </div>
                  <div className={styles.buttons}>
                     <button onClick={() => dispatch({ type: "CLEAR", payload: state })}>Clear</button>
                     <button onClick={() => dispatch({ type: "CHECKOUT", payload: state })}>CheckOut</button>
                     </div>
               </div>
            )}

            {state.checkout && (
               <div className={styles.success}>
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
      </div>
   );
};

export default Cart;
