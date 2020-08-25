import { fetchCurrentUser } from '.';
import { setCurrentUserDbData } from '../../redux/actions';
import store from '../../redux/store';

const loadCurrentUser = async () => {
  // fetches the current user from the database
  let currentUserResponse = await fetchCurrentUser();

  if (currentUserResponse.items && currentUserResponse.items.length === 0) {
    store.dispatch(setCurrentUserDbData(null));
    return;
  }

  const currentUser = currentUserResponse.items[0];
  store.dispatch(setCurrentUserDbData(currentUser));

  return currentUser;
};

export { loadCurrentUser };
