import React from 'react';
import { View, StyleSheet } from 'react-native';

import StandardLogin from '../components/Login/StandardLogin';
import SignUpButton from '../components/Login/SignUpButton';
import { SocialButtons } from '../components/SocialButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StandardLogin />
      <SignUpButton navigation={navigation} />
      <SocialButtons ifLogin={true} />
    </View>
  );
};

export default LoginScreen;
