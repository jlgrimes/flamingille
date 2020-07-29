import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

const SocialLogin = () => {
  return (
    <>
      <SocialIcon
        title="Sign in with Google"
        button
        type="google"
        onPress={() => Auth.federatedSignIn({ provider: 'Google' })}
      />
      {/* add Facebook, Apple, etc. here */}
    </>
  );
};

export { SocialLogin };
