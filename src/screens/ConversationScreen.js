import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { sendMessage } from '../functions';

import store from '../redux/store';

const ConversationScreen = ({ userDbData, route }) => {
  const state = store.getState();
  const { conversation } = route.params;
  const conversationID = conversation.conversationID;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(conversation.messages);
  }, []);

  const onSend = useCallback((messages = []) => {
    const userID = userDbData.currentUser.id;
    const sentMessage = messages[0];

    sendMessage(sentMessage, userID, conversationID);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationScreen);
