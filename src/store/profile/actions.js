import {
  CHANGE_PERSONAL_INFORMATION_ACTION,
} from '../constants';

const createChangePersonalInformationAction = (
  firstname, surname, phoneNumber) => {
  return {
    type: CHANGE_PERSONAL_INFORMATION_ACTION,
    payload: { firstname, surname, phoneNumber },
  };
};

export {
  createChangePersonalInformationAction,
};
