import React from 'react';

const Product = ({data}) => {
    return (
        <div>
            <img src={data.image} alt="product" style={{width: '200px'}} />
            <h2>{data.title}</h2>
            <p>{data.price}</p>
            <div>
                <a href="#">Detail</a>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Product;