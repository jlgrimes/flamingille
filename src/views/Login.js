import React from 'react';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SocialIcon
        title="Sign in with Google"
        button
        type="google"
        onPress={() => Auth.federatedSignIn({ provider: 'Google' })}
      />
    </View>
  );
};

export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
