import React from 'react';

import './ShoppingCartItem.css';

function ShoppingCartItem(props) {
  return (
    <div className="shopping-cart-item">
      <h4>Some Title</h4>
      <p>Short description bla bla bla bla</p>
      <p>Cost: 500</p>
      <button className="negative">Remove</button>
    </div>
  );
}

export default ShoppingCartItem;