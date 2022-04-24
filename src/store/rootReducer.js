import { combineReducers } from 'redux';
import { reducer as productsReducer } from './products/reducer';
import { reducer as cartReducer } from './cart/reducer';
import { reducer as orderReducer } from './order/reducer';
import { reducer as profileReducer } from './profile/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
  profile: profileReducer,
});

export default rootReducer;