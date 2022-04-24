import {
  ADD_PRODUCT_ACTION,
  FETCH_PRODUCTS_ACTION,
  REMOVE_PRODUCT_ACTION,
} from '../constants';

const createAddProductAction = (id, title, description, price) => {
  return {
    type: ADD_PRODUCT_ACTION,
    payload: { id, title, description, price },
  };
}

const createRemoveProductAction = (id) => {
  return {
    type: REMOVE_PRODUCT_ACTION,
    payload: { id },
  };
}

const createFetchProductsAction = () => {
  return async function fetchProductsThunk(dispatch, getState) {
    const response = await fetch('https://fakestoreapi.com/products/');
    const json = await response.json();
    dispatch({ type: FETCH_PRODUCTS_ACTION, payload: json })
  }
}

export {
  createAddProductAction,
  createFetchProductsAction,
  createRemoveProductAction,
};