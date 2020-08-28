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
    let giftedChatMessages = messages.map((message) =>
      message.userID === oppositeUserID
        ? { ...message, _id: message.id, user: { _id: 2 } }
        : { ...message, _id: message.id, user: { _id: 1 } },
    );

    giftedChatMessages = giftedChatMessages.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
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
