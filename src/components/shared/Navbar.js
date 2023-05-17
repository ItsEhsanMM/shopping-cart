import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Icons
import shopIcon from "../../assets/icons/shop.svg";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Style
import styles from './Navbar.module.scss'

const Navbar = () => {
   const { state } = useContext(CartContext);

   return (
      <div className={styles.container}>
         <Link to="/products">Products</Link>

         <div className={styles.cartContainer}>
            <Link to="/cart" className={styles.cart}>
               <img src={shopIcon} alt="cart" style={{ width: "30px" }} />
            </Link>
            <span>{state.itemCounter}</span>
         </div>
      </div>
   );
};

export default Navbar;
