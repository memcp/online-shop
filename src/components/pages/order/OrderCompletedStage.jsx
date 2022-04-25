import React from 'react';
import { useSelector } from 'react-redux';

import './OrderCompletedStage.css';

function OrderCompletedStage(props) {
  const cart = useSelector((state) => state.cart);

  const totalPrice = (items) => {
    let sum = 0;

    for (let item of items) {
      sum += item.price;
    }

    return sum;
  };

  return (
    <div>
      <h3>Thank you for purchase!</h3>
      {
        cart.items.map(item => {
          return (
            <div key={item.id} className="complete-stage-item">
              {item.title} x1, {item.price}
            </div>
          );
        })
      }
      <div className="total-price">
        Total Price: {totalPrice(cart.items)}
      </div>
    </div>
  );
}

export default OrderCompletedStage;