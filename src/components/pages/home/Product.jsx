import React from 'react';
import './Product.css';

function Product(props) {
  const { id, title, description, price } = props;

  return (
    <div key={id} className="product">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><span className="cost">Price: </span>{price}</p>
      <button>ADD TO CART</button>
    </div>
  );
}

export default Product;