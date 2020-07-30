import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

const SocialButtons = ({ ifLogin }) => {
  const buttonText = ifLogin ? 'Sign in with' : 'Sign up with';
  const providers = ['Google'];

  return (
    <>
      {providers.map((provider) => (
        <SocialIcon
          key={provider}
          title={`${buttonText} ${provider}`}
          button
          type={provider.toLowerCase()}
          onPress={() => Auth.federatedSignIn({ provider: provider })}
        />
      ))}
    </>
  );
};

export { SocialButtons };
