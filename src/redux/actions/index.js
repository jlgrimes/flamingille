import {
  SET_USER_AUTH_DATA,
  WIPE_USER_AUTH_DATA,
  SET_CURRENT_USER_DB_DATA,
  SET_CANDIDATE_USERS,
} from '../constants/action-types';

export function setUserAuthData(payload) {
  return { type: SET_USER_AUTH_DATA, payload };
}

export function wipeUserAuthData(payload) {
  return { type: WIPE_USER_AUTH_DATA, payload };
}

export function setCurrentUserDbData(payload) {
  return { type: SET_CURRENT_USER_DB_DATA, payload };
}

export function setCandidateUsers(payload) {
  return { type: SET_CANDIDATE_USERS, payload };
}
