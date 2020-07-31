import React, { useState, useEffect } from 'react';
import { Linking, AsyncStorage } from 'react-native';
import awsconfig from './aws-exports.js';
import Amplify, { Auth, Hub } from 'aws-amplify';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import { Authenticator } from 'aws-amplify-react-native';
import { SignIn, SignUp } from 'aws-amplify-react-native/dist/Auth';

import { LoginScreen, SignUpScreen } from './src/views';
import HomeScreen from './src/views/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

async function urlOpener(url, redirectUrl) {
  await InAppBrowser.isAvailable();
  const { type, url: newUrl } = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (type === 'success') {
    Linking.openURL(newUrl);
  }
}

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener,
  },
});

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

const App = () => {
  const [user, setUser] = useState(null);

  const setUserDataState = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
    } catch (error) {
      setUser(null);
    }
  };

  const setUserDataStorage = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    console.log(userData);
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.log('Error with storing user data', error);
    }
  };

  const getUserDataStorage = async () => {
    const userData = await AsyncStorage.getItem('userData');
    const data = JSON.parse(userData);
    return data;
  };

  useEffect(() => {
    const hubListen = async () => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
        switch (event) {
          case 'signIn':
            setUserDataStorage(data);
          case 'cognitoHostedUI':
          case 'signOut':
            setUser(null);
            break;
          case 'signIn_failure':
            console.log('Sign in failure!!', data);
            break;
          case 'cognitoHostedUI_failure':
            console.log('Sign in failure', data);
            break;
        }
      });
    };

    const loadUserDataFromStorage = async () => {
      const userData = await getUserDataStorage();
      setUser(userData);
    };

    // run the auth listener
    loadUserDataFromStorage();
    hubListen();
  }, []);

  const logOut = async () => {
    await Auth.signOut();
    setUserDataState();
    setUserDataStorage();
  };

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ logOut }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
