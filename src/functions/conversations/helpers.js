import { getCurrentUserConversationUsersEntries, fetchOppositeUserID } from '.';
import { fetchUser } from '../user';

import store from '../../redux/store';
import { setConversations } from '../../redux/actions';

const loadConversations = async () => {
  const userConversationsRes = await getCurrentUserConversationUsersEntries();

  await userConversationsRes.forEach(async (userConversation) => {
    const conversationID = userConversation.conversationID;
    const oppositeUserID = await fetchOppositeUserID(conversationID);
    console.log(oppositeUserID);
  });
  // store.dispatch(setConversations(conversations));
};

export { loadConversations };
