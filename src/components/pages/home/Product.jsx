import React from 'react';
import { useDispatch } from 'react-redux';

import { createAddCartItemAction } from '../../../store/cart/actions';

import './Product.css';

function Product(props) {
  const { id, title, description, price } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    const actionToCartAction = createAddCartItemAction(
      id,
      title,
      description,
      price,
    );
    dispatch(actionToCartAction);
  };

  // TODO disable button if product already added to cart
  return (
    <div key={id} className="product">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><span className="cost">Price: </span>{price}</p>
      <button onClick={handleClick}>ADD TO CART</button>
    </div>
  );
}

export default Product;