import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StandardLogin, SignUpButton } from '../components/Login';
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

export { LoginScreen };
