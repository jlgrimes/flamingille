import {
  listConversationUsers,
  listConversations,
} from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';

const getCurrentUserConversationUsersEntries = async () => {
  const state = store.getState();

  const filter = {
    userID: {
      eq: state.userDbData.currentUser.id,
    },
  };

  const conversationUsers = await API.graphql(
    graphqlOperation(listConversationUsers, { filter: filter }),
  );

  return conversationUsers.data.listConversationUsers.items;
};

// the conversationID piped in is contingent that the above function has run successfully
// the two are next to each other in await calls when the app is loaded
const getCurrentUserConversations = async (conversationID) => {
  const filter = {
    id: {
      eq: conversationID,
    },
  };

  const conversations = await API.graphql(
    graphqlOperation(listConversations, { filter: filter }),
  );

  return conversations.data.listConversations.items;
};

export { getCurrentUserConversations, getCurrentUserConversationUsersEntries };
