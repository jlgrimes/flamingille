import {
  SET_USER_AUTH_DATA,
  WIPE_USER_AUTH_DATA,
  SET_CURRENT_USER_DB_DATA,
  SET_CANDIDATE_USERS,
} from '../constants/action-types';

const initialState = {
  userAuthData: null,
  userDbData: {
    currentUser: null,
    candidateUsers: [],
  },
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_USER_AUTH_DATA) {
    return {
      ...state,
      userAuthData: action.payload,
    };
  }
  if (action.type === WIPE_USER_AUTH_DATA) {
    return {
      ...state,
      userAuthData: null,
    };
  }
  if (action.type === SET_CURRENT_USER_DB_DATA) {
    return {
      ...state,
      userDbData: {
        ...state.userDbData,
        currentUser: action.payload,
      },
    };
  }
  if (action.type === SET_CANDIDATE_USERS) {
    return {
      ...state,
      userDbData: {
        ...state.userDbData,
        candidateUsers: action.payload,
      },
    };
  }
  return state;
}

export default rootReducer;
