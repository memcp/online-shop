export const loggerMiddleware = (store) => (next) => (action) => {
  let result;

  console.groupCollapsed('dispatching', action.type);
  console.log('payload', action.payload)
  console.log('previous state', store.getState());
  result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

