import React from "react";

const CartDetails = ({ data }) => {
   const { image, title, price } = data;

   return (
      <div>
         <img />
         <div>
            <h2>title</h2>
            <h3>price</h3>
         </div>
         <div>
            <button>-</button>
            <button>+</button>
         </div>
      </div>
   );
};

export default CartDetails;
