import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StandardLogin, SocialLogin } from '../components/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const Login = () => {
  return (
    <View style={styles.container}>
      <StandardLogin />
      <SocialLogin />
    </View>
  );
};

export { Login };
