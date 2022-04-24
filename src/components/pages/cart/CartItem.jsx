import React from 'react';
import { useDispatch } from 'react-redux';

import { createRemoveCartItemAction } from '../../../store/cart/actions';

import './CartItem.css';

function CartItem(props) {
  const { id, title, description, price } = props;
  const dispatch = useDispatch();

  const cut = (description) => {
    const shorStringLength = 80;
    return description.slice(0, shorStringLength) + '...';
  };

  const handleRemoveButtonClick = () => {
    const removeCartItemAction = createRemoveCartItemAction(id);
    dispatch(removeCartItemAction);
  };

  return (
    <div key={id} className="shopping-cart-item">
      <h4>{title}</h4>
      <p>{cut(description)}</p>
      <p>Price: {price}</p>
      <button onClick={handleRemoveButtonClick} className="negative">Remove
      </button>
    </div>
  );
}

export default CartItem;