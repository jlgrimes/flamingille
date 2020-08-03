import React from 'react';
import { connect } from 'react-redux';
import { wipeUserData } from '../redux/actions';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Auth } from 'aws-amplify';

import HomeCardStack from '../components/Home/HomeCardStack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ userData, wipeUserData }) => {
  console.log(userData);
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <HomeCardStack />
      <Button onPress={() => Auth.signOut()}>Sign Out</Button>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
