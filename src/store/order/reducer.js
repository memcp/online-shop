import {
  CHANGE_ADDRESS_ACTION,
  CHANGE_CREDIT_CARD_ACTION,
} from '../constants';

const initialState = {
  address: {},
  creditCard: {}
}

export function reducer(state=initialState, action) {
  if (action.type === CHANGE_ADDRESS_ACTION) {
    return {
      ...state,
      address: {...action.payload}
    }
  }

  if (action.type === CHANGE_CREDIT_CARD_ACTION) {

  }

  return state
}