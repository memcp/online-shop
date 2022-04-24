import {
  CHANGE_PERSONAL_INFORMATION_ACTION
} from '../constants';

const initialState = {
  personalInformation: {},
};

export function reducer(state=initialState, action) {
  if (action.type === CHANGE_PERSONAL_INFORMATION_ACTION) {
    return {
      ...state,
      personalInformation: {...action.payload}
    }
  }

  return state;
}