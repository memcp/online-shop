import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAddCartItemAction } from '../../../store/cart/actions';

import './Product.css';

function Product(props) {
  const { id, title, image, description, price } = props;
  const { items } = useSelector((state) => state.cart);
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

  const alreadyInCart = (id) => {
    return items.some(item => item.id === id);
  };

  return (
    <div key={id} className="product">
      <h3>{title}</h3>
      <img src={image} width={100} alt="An Image"/>
      <p>{description}</p>
      <p><span className="cost">Price: </span>{price}</p>
      <button
        disabled={alreadyInCart(id)}
        onClick={handleClick}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default Product;