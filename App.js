import React from 'react';
import Amplify from '@aws-amplify/core';
import awsconfig from './aws-exports.js';
import { Authenticator } from 'aws-amplify-react-native';

import { Login } from './src/views/Login';
import { SignIn, SignUp } from 'aws-amplify-react-native/dist/Auth';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
