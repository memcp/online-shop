import {
  CHANGE_PERSONAL_INFORMATION_ACTION,
  CHANGE_ADDRESS_ACTION,
  CHANGE_CREDIT_CARD_ACTION,
} from '../constants';

const createChangePersonalInformationAction = (
  firstname, surname, phoneNumber) => {
  return {
    type: CHANGE_PERSONAL_INFORMATION_ACTION,
    payload: { firstname, surname, phoneNumber },
  };
};

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

export {
  createChangePersonalInformationAction,
  createChangeAddressAction,
  createChangeCreditCardAction,
};