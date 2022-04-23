import {
  ADD_PRODUCT_ACTION,
  FETCH_PRODUCTS_ACTION,
  REMOVE_PRODUCT_ACTION,
} from '../constants';

const initialState = {
  products: [],
};

export function reducer(state = initialState, action) {
  if (action.type === ADD_PRODUCT_ACTION) {
    return {
      ...state,
      products: [...state.products, action.payload],
    };
  }

  if (action.type === REMOVE_PRODUCT_ACTION) {
    const arr = state.products.filter(product => product !== action.payload.id);
    console.log('arr', arr);
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.payload.id),
    }
  }

  if (action.type === FETCH_PRODUCTS_ACTION) {
    return {
      ...state,
      products: action.payload
    };
  }

  return state;
}