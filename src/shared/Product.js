import React from "react";

//function
import { shorten } from "../helper/shortenName";

const Product = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="product" style={{ width: "200px" }} />
      <h2>{shorten(data.title)}</h2>
      <p>{data.price}</p>
      <div>
        <a href="#">Detail</a>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default Product;
