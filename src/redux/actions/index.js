import {
  SET_USER_AUTH_DATA,
  WIPE_USER_AUTH_DATA,
  SET_CURRENT_USER_DB_DATA,
  SET_CANDIDATE_USERS,
  ADD_CANDIDATE_USER,
  TOGGLE_MATCH,
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

export function addCandidateUser(payload) {
  return { type: ADD_CANDIDATE_USER, payload };
}

export function toggleMatch(payload) {
  return { type: TOGGLE_MATCH, payload };
}
