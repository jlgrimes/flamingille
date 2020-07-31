import { SET_USER_DATA, WIPE_USER_DATA } from '../constants/action-types';

const initialState = {
  userData: null,
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_USER_DATA) {
    return {
      userData: action.payload,
    };
  }
  if (action.type === WIPE_USER_DATA) {
    return { userData: null };
  }
  return state;
}

export default rootReducer;
