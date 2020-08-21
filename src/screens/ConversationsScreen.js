import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../redux/maps';
import { StyleSheet, View } from 'react-native';

import ConversationCard from '../components/Conversations/ConversationCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const ConversationsScreen = ({ navigation, conversations }) => {
  return (
    <View style={styles.container}>
      {conversations &&
        conversations.map((convo) => (
          <ConversationCard key={convo.id} conversation={convo} />
        ))}
    </View>
  );
};

export default connect(mapStateToProps)(ConversationsScreen);
