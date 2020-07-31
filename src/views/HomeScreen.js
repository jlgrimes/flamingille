import React from 'react';
import { connect } from 'react-redux';

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

const HomeScreen = ({ userData }) => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Button onPress={() => console.log(userData)}>Hi</Button>
    </View>
  );
};

export default connect(mapStateToProps)(HomeScreen);
