import React from 'react';
import Product from '../home/Product';
import ShoppingCartItem from './ShoppingCartItem';

import './ShoppingCart.css';

function ShoppingCart(props) {
  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <ShoppingCartItem
          id={1}
          name={'Some text'}
          description={'Short description bla bla bla'}
          cost={500}
        />
        <ShoppingCartItem
          id={2}
          name={'Some text'}
          description={'Short description bla bla bla'}
          cost={400}
        />
      </div>

      <h3>Items: 5</h3>
      <button className="confirm-order">Confirm Order</button>
    </div>
  );
}

export default ShoppingCart;