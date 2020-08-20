import { listUsers, listMatches } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';

const getConversationUsersEntries = async () => {
  const state = store.getState();
  console.log(state.userDbData.currentUser);

  const filter = {
    userID: {
      eq: state.userDbData.currentUser,
    },
  };
};

export { getConversationUsersEntries };
