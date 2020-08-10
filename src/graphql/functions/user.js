// yeah yeah this code looks incredibly redundant, but hopefully the fetchUsers
// function will at least be somewhat different than, the opposite of this one...

import store from '../../redux/store';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers, listMatches } from '../queries';

export const fetchCurrentUser = async () => {
  const state = store.getState();
  const filter = {
    username: {
      eq: state.userAuthData.username,
    },
  };
  const evt = await API.graphql(
    graphqlOperation(listUsers, { filter: filter }),
  );
  return evt.data.listUsers;
};