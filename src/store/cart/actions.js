import {
  ADD_CART_ITEM_ACTION,
  REMOVE_CART_ITEM_ACTION,
} from '../constants';

const createAddCartItemAction = (id, title, description, price) => {
  return {
    type: ADD_CART_ITEM_ACTION,
    payload: { id, title, description, price },
  };
};

const createRemoveCartItemAction = (id) => {
  return {
    type: REMOVE_CART_ITEM_ACTION,
    payload: { id },
  };
};

export {
  createAddCartItemAction,
  createRemoveCartItemAction,
};