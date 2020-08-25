import {
  loadUserAuthDataFromStorage,
  loadConversations,
  fetchCurrentUser,
  fetchMatches,
  fetchCandidates,
} from '.';
import store from '../redux/store';
import { setCurrentUserDbData, setCandidateUsers } from '../redux/actions';

const fetchHomeScreenData = async () => {
  // fetches the current user from the database
  let currentUserResponse = await fetchCurrentUser();

  if (currentUserResponse.items && currentUserResponse.items.length === 0) {
    store.dispatch(setCurrentUserDbData(null));
    return;
  }

  const currentUser = currentUserResponse.items[0];
  store.dispatch(setCurrentUserDbData(currentUser));

  // fetches the matches that the current user has made
  // this is used to filter out the candidates that we have matched already
  const matches = await fetchMatches(currentUser);

  // fetches the list of candidates we display on the home screen
  const candidates = await fetchCandidates(currentUser, matches);
  store.dispatch(setCandidateUsers(candidates));
};

const loadInitData = async () => {
  // here we fetch the home screen data - everything pertaining to the current user, candidates, etc.
  await fetchHomeScreenData();

  // next is to load the conversations into redux given the userID and the tables
  await loadConversations();
};

export { loadInitData };
