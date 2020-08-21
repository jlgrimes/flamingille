import { getCurrentUserConversationUsersEntries, fetchOppositeUserID } from '.';
import { fetchUser } from '../user';

import store from '../../redux/store';
import { setConversations } from '../../redux/actions';

const loadConversations = async () => {
  const userConversationsRes = await getCurrentUserConversationUsersEntries();
  const conversations = [];

  for (const userConversation of userConversationsRes) {
    const conversationID = userConversation.conversationID;
    const oppositeUserID = await fetchOppositeUserID(conversationID);
    const oppositeUser = await fetchUser(oppositeUserID);

    await conversations.push({
      recipientUser: oppositeUser,
      messages: [],
    });
  }
  console.log(conversations);
  store.dispatch(setConversations(conversations));
};

export { loadConversations };
