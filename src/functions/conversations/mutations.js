import { API, graphqlOperation } from 'aws-amplify';
import {
  createConversation,
  createConversationUsers,
} from '../../graphql/mutations';

// when the two users match, create the conversation between them
const addConversation = async () => {
  const entry = {
    messages: [],
  };
  const res = await API.graphql(
    graphqlOperation(createConversation, { input: entry }),
  );
  return res;
};

// when two users match, they will both be added in the conversationUsers table
const addConversationUsersEntries = async (
  userID1,
  userID2,
  conversationID,
) => {
  await [userID1, userID2].forEach(async (userID) => {
    const entry = {
      conversationID: conversationID,
      userID: userID,
    };

    const res = await API.graphql(
      graphqlOperation(createConversationUsers, { input: entry }),
    );
    console.log(res);
  });
};

export { addConversation, addConversationUsersEntries };
