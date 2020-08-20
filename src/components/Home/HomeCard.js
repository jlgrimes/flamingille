import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps';

import { Card, Title, Paragraph, Modal } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import { matchWithCandidate } from '../../functions';

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const HomeCard = ({ user }) => {
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
