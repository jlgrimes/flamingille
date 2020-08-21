// yeah yeah this code looks incredibly redundant, but hopefully the fetchUsers
// function will at least be somewhat different than, the opposite of this one...

import store from '../../redux/store';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

const fetchUser = async (userID) => {
  const filter = {
    id: {
      eq: userID,
    },
  };
  const evt = await API.graphql(
    graphqlOperation(listUsers, { filter: filter }),
  );
  return evt.data.listUsers.items[0];
};

// not sure the context of this????
// we should be able to combine the above function, but again not sure
const fetchCurrentUser = async () => {
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

export { fetchUser, fetchCurrentUser };
