import React from 'react';
import Product from '../home/Product';
import CartItem from './CartItem';

import './Cart.css';

function Cart(props) {
  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <CartItem
          id={1}
          name={'Some text'}
          description={'Short description bla bla bla'}
          cost={500}
        />
        <CartItem
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

export default Cart;