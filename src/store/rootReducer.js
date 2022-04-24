import { combineReducers } from 'redux';
import { reducer as productsReducer } from './products/reducer';
import { reducer as cartReducer } from './cart/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;