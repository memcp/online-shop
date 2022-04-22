import React from 'react';

import './CartItem.css';

function CartItem(props) {
  return (
    <div className="shopping-cart-item">
      <h4>Some Title</h4>
      <p>Short description bla bla bla bla</p>
      <p>Cost: 500</p>
      <button className="negative">Remove</button>
    </div>
  );
}

export default CartItem;