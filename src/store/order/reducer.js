import {
  CHANGE_ADDRESS_ACTION,
  CHANGE_CREDIT_CARD_ACTION,
  CHANGE_ORDER_STAGE_ACTION,
  PERSONAL_INFORMATION_STAGE,
} from '../constants';

const initialState = {
  address: {},
  creditCard: {},
  orderStage: PERSONAL_INFORMATION_STAGE,
};

export function reducer(state = initialState, action) {
  if (action.type === CHANGE_ADDRESS_ACTION) {
    return {
      ...state,
      address: { ...action.payload },
    };
  }

  if (action.type === CHANGE_CREDIT_CARD_ACTION) {
    return {
      ...state,
      creditCard: { ...action.payload },
    };
  }

  if (action.type === CHANGE_ORDER_STAGE_ACTION) {
    return {
      ...state,
      orderStage: action.payload,
    };
  }

  return state;
}