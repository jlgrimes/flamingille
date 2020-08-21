import {
  listConversationUsers,
  listConversations,
} from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';

// used to get all of the conversation IDs
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

const fetchOppositeUserID = async (conversationID) => {
  const state = store.getState();

  // the filter says to load a conversation that has the same ID as the conversationID
  // but NOT the same ID as the userID. this forces it to pull up the OTHER entry
  const filter = {
    conversationID: {
      eq: conversationID,
    },
    userID: {
      ne: state.userDbData.currentUser.id,
    },
  };

  const conversationUsers = await API.graphql(
    graphqlOperation(listConversationUsers, { filter: filter }),
  );

  return conversationUsers.data.listConversationUsers.items[0].userID;
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

export {
  getCurrentUserConversations,
  fetchOppositeUserID,
  getCurrentUserConversationUsersEntries,
};
