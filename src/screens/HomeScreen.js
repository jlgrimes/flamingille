import React from 'react';
import { connect } from 'react-redux';
import { wipeUserData } from '../actions';

import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Auth } from 'aws-amplify';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

function mapDispatchToProps(dispatch) {
  return {
    wipeUserData: (userData) => dispatch(wipeUserData(userData)),
  };
}

const HomeScreen = ({ userData, wipeUserData }) => {
  console.log(userData);
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Button onPress={() => Auth.signOut()}>Sign Out</Button>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
