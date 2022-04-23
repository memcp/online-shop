import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';
import { loggerMiddleware } from './middleware';

const storeEnhancer = applyMiddleware(
  loggerMiddleware,
  thunk,
);

const store = createStore(rootReducer, storeEnhancer);

export default store;