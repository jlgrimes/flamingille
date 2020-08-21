import React from 'react';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps';

import { Card, Title, Paragraph } from 'react-native-paper';

const ConversationCard = ({ conversation }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Title>{conversation.recipientUser}</Title>
          <Paragraph>something cool i think</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationCard);
