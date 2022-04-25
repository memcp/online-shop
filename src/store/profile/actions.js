import {
  CHANGE_PERSONAL_INFORMATION_ACTION,
} from '../constants';

const createChangePersonalInformationAction = (
  firstName, surname, phoneNumber) => {
  return {
    type: CHANGE_PERSONAL_INFORMATION_ACTION,
    payload: { firstName, surname, phoneNumber },
  };
};

export {
  createChangePersonalInformationAction,
};
