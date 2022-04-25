import {
  CHANGE_ADDRESS_ACTION,
  CHANGE_CREDIT_CARD_ACTION, CHANGE_ORDER_STAGE_ACTION,
} from '../constants';

const initialState = {
  address: {},
  creditCard: {},
  orderStage: 'personal-information-stage',
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