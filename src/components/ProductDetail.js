import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//API
import { productsContext } from "../context/ProductsContextProvider";

const ProductDetail = () => {
  const data = useContext(productsContext);
  const param = useParams().id;
  const product = data[param - 1];

  const { image, title, description, category, price } = product;

  return (
    <div>
      <img src={image} alt="product" style={{width : '200px'}} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>category :</span> {category}
        </p>

        <div>
          <p>{price} $</p>

          <Link to="/">Back to product</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
