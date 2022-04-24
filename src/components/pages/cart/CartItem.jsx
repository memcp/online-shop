import React from 'react';

import './CartItem.css';

function CartItem(props) {
  const { id, title, description, price } = props;

  const cut = (description) => {
    const shorStringLength = 80;
    return description.slice(0, shorStringLength) + '...';
  };

  return (
    <div key={id} className="shopping-cart-item">
      <h4>{title}</h4>
      <p>{cut(description)}</p>
      <p>Price: {price}</p>
      <button className="negative">Remove</button>
    </div>
  );
}

export default CartItem;