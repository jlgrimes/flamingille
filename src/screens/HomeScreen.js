import React from 'react';
import { connect } from 'react-redux';
import { wipeUserData } from '../redux/actions';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Auth } from 'aws-amplify';

import HomeCardStack from '../components/Home/HomeCardStack';

import { API, graphqlOperation } from 'aws-amplify';
import { createUsers } from '../graphql/mutations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ userData, wipeUserData }) => {
  console.log(userData);

  const addDummyUser = async () => {
    const userDetails = {
      name: 'Jared Grimes + Holli Konrad',
      description:
        'We are a couple looking to PARTY it up with our couple homies',
    };
    const res = await API.graphql(
      graphqlOperation(createUsers, { input: userDetails }),
    );
    console.log(res);
  };

  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <HomeCardStack />
      <Button onPress={addDummyUser}>add dummy</Button>
      <Button onPress={() => Auth.signOut()}>Sign Out</Button>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
