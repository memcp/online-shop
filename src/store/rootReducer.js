import { combineReducers } from 'redux';
import { reducer as productsReducer } from './products/reducer';

const rootReducer = combineReducers({
  products: productsReducer
});

export default rootReducer;