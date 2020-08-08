import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps';

import { Card, Title, Paragraph, Modal } from 'react-native-paper';
import { Icon } from 'react-native-elements';

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
  return (
    <>
      <Card>
        <Card.Content>
          <Title>{user.name}</Title>
          <Paragraph>{user.description}</Paragraph>
          <View style={styles.icons}>
            <Icon
              raised
              name="create"
              type="ionicon"
              color="gray"
              onPress={() => console.log('yep')}
            />
          </View>
        </Card.Content>
      </Card>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCard);
