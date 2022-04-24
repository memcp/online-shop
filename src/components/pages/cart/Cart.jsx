import React from 'react';
import { useSelector } from 'react-redux';

import Product from '../home/Product';
import CartItem from './CartItem';

import './Cart.css';

function Cart(props) {
  const { items } = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div className="shopping-cart">
      <div className="cart-items">
        {
          items.map(item => {
            return (
              <CartItem
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            )
          })
        }
      </div>

      <h3>Items: 0</h3>
      <button className="confirm-order">Order</button>
    </div>
  );
}

export default Cart;