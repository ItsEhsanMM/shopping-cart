import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Icons
import shopIcon from "../../assets/icons/shop.svg";

// Context
import { CartContext } from "../../context/CartContextProvider";

const Navbar = () => {
   const { state } = useContext(CartContext);

   return (
      <div>
         <Link to="/products">Products</Link>

         <div>
            <Link to="/cart">
               <img src={shopIcon} alt="cart" style={{ width: "30px" }} />
            </Link>
            <span>{state.itemCounter}</span>
         </div>
      </div>
   );
};

export default Navbar;
