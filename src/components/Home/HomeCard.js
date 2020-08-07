import React from 'react';
import { StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const HomeCard = ({ navigation, user }) => {
  return (
    <Card key={user.id}>
      <Card.Content>
        <Title>{user.name}</Title>
        <Paragraph>{user.description}</Paragraph>
        <View style={styles.icons}>
          <Icon
            raised
            name="heart"
            type="ionicon"
            color="red"
            onPress={() => console.log('hello')}
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
  );
};

export default connect(mapStateToProps)(HomeCard);
