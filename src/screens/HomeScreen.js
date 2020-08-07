import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { wipeUserData } from '../redux/actions';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Auth } from 'aws-amplify';

import HomeCardStack from '../components/Home/HomeCardStack';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';

import {screenNames} from '../constants/screenNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation, userData, wipeUserData }) => {
  /*
  const addDummyUser = async () => {
    const userDetails = {
      username: userData.username,
      name: 'Jared Grimes + Holli Konrad',
      description:
        'We are a couple looking to PARTY it up with our couple homies',
    };
    const res = await API.graphql(
      graphqlOperation(createUser, { input: userDetails }),
    );
    console.log(res);
  };
  */

  const checkIfProfileExists = async () => {
    const filter = {
      username: {
        eq: userData.username,
      },
    };
    const res = await API.graphql(
      graphqlOperation(listUsers, { filter: filter }),
    );
    return res.data.listUsers.items.length > 0;
  };

  useEffect(() => {
    const routeToCompleteProfile = async () => {
      const profileExists = await checkIfProfileExists();
      if (!profileExists) {
        navigation.navigate(screenNames.completeProfile);
      }
    };
    routeToCompleteProfile();
  }, []);

  return (
    <View style={styles.container}>
      <HomeCardStack />
      {/*<Button onPress={addDummyUser}>add dummy</Button>*/}
      <Button onPress={() => Auth.signOut()}>Sign Out</Button>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
