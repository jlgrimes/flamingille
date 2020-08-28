import React from 'react';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps';

import { Card, Title, Paragraph } from 'react-native-paper';
import { screenNames } from '../../constants/screenMetadata';

const ConversationCard = ({ conversation, navigation }) => {
  return (
    <>
      <Card
        onPress={() =>
          navigation.navigate(screenNames.conversation, {
            conversation: conversation,
          })
        }>
        <Card.Content>
          <Title>{conversation.recipientUser.name}</Title>
          <Paragraph>{conversation.messages[0].text}</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationCard);
