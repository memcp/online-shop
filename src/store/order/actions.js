import {
  CHANGE_ADDRESS_ACTION,
  CHANGE_CREDIT_CARD_ACTION,
  CHANGE_ORDER_STAGE_ACTION,
} from '../constants';

const createChangeAddressAction = (town, street, home, flat) => {
  return {
    type: CHANGE_ADDRESS_ACTION,
    payload: { town, street, home, flat },
  };
};

const createChangeCreditCardAction = (number, holder, expirationDate, cvv) => {
  return {
    type: CHANGE_CREDIT_CARD_ACTION,
    payload: { number, holder, expirationDate, cvv },
  };
};

const createChangeOrderStageAction = (stage) => {
  return {
    type: CHANGE_ORDER_STAGE_ACTION,
    payload: stage,
  };
};

export {
  createChangeAddressAction,
  createChangeCreditCardAction,
  createChangeOrderStageAction,
};