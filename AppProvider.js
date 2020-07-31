import App from './App';

import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './src/store/index';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppProvider;
