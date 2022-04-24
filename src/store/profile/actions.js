import {
  CHANGE_PERSONAL_INFORMATION_ACTION,
} from '../constants';

const createPersonalInformationAction = (firstname, surname, phoneNumber) => {
  return {
    type: CHANGE_PERSONAL_INFORMATION_ACTION,
    payload: { firstname, surname, phoneNumber },
  };
};

export {
  createPersonalInformationAction,
};