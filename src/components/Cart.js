import React, { useContext, useEffect } from "react";

// Component
import CartDetails from "./shared/CartDetails";

// Context
import { CartContext } from "../context/CartContextProvider";

const Cart = () => {
   const { state } = useContext(CartContext);

   return <div>
    {state.selectedItem.map(item => <CartDetails data={item}/>)}
   </div>;
};

export default Cart;
