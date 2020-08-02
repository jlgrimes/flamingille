import { SET_USER_DATA, WIPE_USER_DATA } from '../constants/action-types';

export function setUserData(payload) {
  return { type: SET_USER_DATA, payload };
}

export function wipeUserData(payload) {
  return { type: WIPE_USER_DATA, payload };
}
