import { listConversationUsers } from '../../graphql/queries';
import { addConversationUser } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';

// when two users match, they will both be added in the conversationUsers table
const addConversationUsersEntries = (userID1, userID2) => {
  [userID1, userID2].forEach((user) => {
    console.log(user);
  });
};

const getCurrentUserConversationUsersEntries = async () => {
  const state = store.getState();

  const filter = {
    conversationID: {
      eq: state.userDbData.currentUser.id,
    },
  };

  const conversationUsers = await API.graphql(
    graphqlOperation(listConversationUsers, { filter: filter }),
  );

  return conversationUsers.data.listConversationUsers.items;
};

export { getCurrentUserConversationUsersEntries };
