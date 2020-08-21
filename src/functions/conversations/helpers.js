import { API, graphqlOperation } from 'aws-amplify';
import {
  getCurrentUserConversations,
  getCurrentUserConversationUsersEntries,
} from '.';

import store from '../../redux/store';

const loadConversations = async () => {
  const userConversationsRes = await getCurrentUserConversationUsersEntries();
  const conversationID = userConversationsRes[0].conversationID;

  const conversations = await getCurrentUserConversations(conversationID);

  console.log(conversations);
};

export { loadConversations };
