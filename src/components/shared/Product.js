import React, { useContext } from "react";
import { Link } from "react-router-dom";

//function
import { shorten, isAdded, quantityCount } from "../../helper/functions";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

const Product = ({ data }) => {
   const { state, dispatch } = useContext(CartContext);

   return (
      <div>
         <img
            src={data.image}
            alt="product"
            style={{
               width: "200px",
            }}
         />

         <h2>{shorten(data.title)}</h2>

         <p>{data.price} $</p>

         <div>
            <Link to={`/products/${data.id}`}>Detail</Link>

            <div>
               {quantityCount(state, data.id) > 1 && (
                  <button
                     onClick={() =>
                        dispatch({
                           type: "DECREASE",
                           payload: data,
                        })
                     }
                  >
                     -
                  </button>
               )}

               {quantityCount(state, data.id) === 1 && (
                  <button
                     onClick={() =>
                        dispatch({
                           type: "REMOVE",
                           payload: data,
                        })
                     }
                  >
                     <img src={trashIcon} alt="remove" style={{ width: "10px" }} />
                  </button>
               )}

               {isAdded(state, data.id) ? (
                  <button
                     onClick={() =>
                        dispatch({
                           type: "INCREASE",
                           payload: data,
                        })
                     }
                  >
                     +
                  </button>
               ) : (
                  <button
                     onClick={() =>
                        dispatch({
                           type: "ADD_ITEM",
                           payload: data,
                        })
                     }
                  >
                     Add Item
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};

export default Product;
