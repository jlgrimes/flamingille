import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Auth } from 'aws-amplify';

import { getCurrentUserConversationUsersEntries } from '../functions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Button onPress={() => Auth.signOut()}>Sign Out</Button>
      <Button onPress={() => getCurrentUserConversationUsersEntries()}>
        test
      </Button>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
