import {
  SET_USER_AUTH_DATA,
  WIPE_USER_AUTH_DATA,
  SET_CURRENT_USER_DB_DATA,
  SET_CANDIDATE_USERS,
  ADD_CANDIDATE_USER,
  TOGGLE_MATCH,
  SET_CONVERSATIONS,
  RESET_STORE,
} from '../constants/action-types';

import { initialState } from '../constants/initial-state';

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
  if (action.type === ADD_CANDIDATE_USER) {
    return {
      ...state,
      userDbData: {
        ...state.userDbData,
        candidateUsers: [...state.userDbData.candidateUsers, action.payload],
      },
    };
  }
  if (action.type === TOGGLE_MATCH) {
    return {
      ...state,
      matched: action.payload,
    };
  }
  if (action.type === SET_CONVERSATIONS) {
    return {
      ...state,
      conversations: action.payload,
    };
  }
  if (action.type === RESET_STORE) {
    return initialState;
  }
  return state;
}

export default rootReducer;
