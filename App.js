import React from 'react';
import Amplify from '@aws-amplify/core';
import awsconfig from './aws-exports.js';

import { Login } from './src/views/Login';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
