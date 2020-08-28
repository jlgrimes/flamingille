import {
  getCurrentUserConversationUsersEntries,
  fetchOppositeUserID,
  getConversationMessages,
  addMessage,
} from '.';
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

    // now, we fetch the messages
    const messages = await getConversationMessages(conversationID);

    // we tweak the messages we receive to play nice with GiftedChat
    const giftedChatMessages = messages.map((message) =>
      message.userID === oppositeUserID
        ? { ...message, user: { _id: 1 } }
        : { ...message, user: { _id: 0 } },
    );

    await conversations.push({
      conversationID: conversationID,
      recipientUser: oppositeUser,
      messages: giftedChatMessages,
    });
  }

  store.dispatch(setConversations(conversations));
};

const sendMessage = async (message, userID, conversationID) => {
  // redux stuff todo: here
  await addMessage(message, userID, conversationID);
};

export { loadConversations, sendMessage };
