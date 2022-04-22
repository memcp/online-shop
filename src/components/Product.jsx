import React from 'react';
import './Product.css';

function Product(props) {
  const { id, name, description, cost } = props;

  return (
    <div key={id} className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p><span className="cost">cost: </span>{cost}</p>
      <button>ADD TO CART</button>
    </div>
  );
}

export default Product;