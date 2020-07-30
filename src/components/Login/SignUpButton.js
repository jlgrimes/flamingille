import React from 'react';
import { SocialIcon } from 'react-native-elements';

const SignUpButton = ({ navigation }) => {
  return (
    <>
      <SocialIcon
        title="Don't have an account? Sign Up"
        button
        light
        iconStyle={{ width: 0 }}
        type="medium"
        onPress={() => navigation.navigate('Sign Up')}
      />
      {/* add Facebook, Apple, etc. here */}
    </>
  );
};

export { SignUpButton };
