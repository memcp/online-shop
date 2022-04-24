import {
  ADD_CART_ITEM_ACTION,
  REMOVE_CART_ITEM_ACTION,
} from '../constants';

const initialState = {
  items: [],
};

export function reducer(state = initialState, action) {
  if (action.type === ADD_CART_ITEM_ACTION) {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }

  if (action.type === REMOVE_CART_ITEM_ACTION) {
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.payload.id),
    };
  }

  return state;
}