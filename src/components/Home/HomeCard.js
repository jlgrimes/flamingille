import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps';

import { Card, Title, Paragraph, Modal } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import { API, graphqlOperation } from 'aws-amplify';
import { createMatch } from '../../graphql/mutations';
import { listMatches } from '../../graphql/queries';

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const HomeCard = ({
  navigation,
  user,
  userDbData,
  setCurrentUserDbData,
  setCandidateUsers,
  addCandidateUser,
  toggleMatch,
}) => {
  const matchWithCandidate = async () => {
    const target = user;
    const sender = userDbData.currentUser.items[0];

    const match = {
      sender: sender.id,
      target: target.id,
      status: true,
    };

    const res = await API.graphql(
      graphqlOperation(createMatch, { input: match }),
    );

    await checkMatchCompleted(sender.id, target.id);

    setCandidateUsers(
      userDbData.candidateUsers.filter(
        (candidateUser) => candidateUser.id === sender.id,
      ),
    );
  };

  return (
    <>
      <Card>
        <Card.Content>
          <Title>{user.name}</Title>
          <Paragraph>{user.description}</Paragraph>
          <View style={styles.icons}>
            <Icon
              raised
              name="heart"
              type="ionicon"
              color="red"
              onPress={() => matchWithCandidate()}
            />
            <Icon
              raised
              name="close"
              type="ionicon"
              color="gray"
              onPress={() => console.log('nope')}
            />
          </View>
        </Card.Content>
      </Card>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCard);
