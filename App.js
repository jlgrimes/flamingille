// React imports
import React, { useState, useEffect } from 'react';
import { Linking, AsyncStorage } from 'react-native';

// AWS imports
import awsconfig from './aws-exports.js';
import Amplify, { Auth, Hub } from 'aws-amplify';
import InAppBrowser from 'react-native-inappbrowser-reborn';

// Redux imports
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './src/redux/maps';

// UI Library Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Component imports
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignUpCodeScreen from './src/screens/SignUpCodeScreen';
import CompleteProfileScreen from './src/screens/CompleteProfileScreen';

// Constants imports
import { screenNames } from './src/constants/screenNames';

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

const App = ({ userData, setUserData, wipeUserData }) => {
  const setUserDataStorage = async (userData) => {
    userData = userData ? userData : '';
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

  const loadUserDataFromStorage = async () => {
    const userData = await getUserDataStorage();
    setUserData(userData);
  };

  useEffect(() => {
    const hubListen = async () => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
        console.log(event);
        switch (event) {
          case 'signIn':
            setUserData(data);
            setUserDataStorage(data);
            break;
          case 'cognitoHostedUI':
            break;
          case 'signOut':
            wipeUserData();
            setUserDataStorage(null);
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

    // run the auth listener
    loadUserDataFromStorage();
    hubListen();
  }, []);

  const logOut = async () => {
    await Auth.signOut();
    wipeUserData();
    setUserDataStorage();
  };

  // console.log(userData);

  const renderHome = () => {
    if (userData) {
      if (userData.username.includes('Google')) {
        return true;
      }
      if (userData.attributes.email_verified) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          // we render home this way because of "protected routes" and stuff like
          // more info here: https://reactnavigation.org/docs/auth-flow
          renderHome() ? (
            <>
              <Stack.Screen
                name={screenNames.home}
                component={HomeScreen}
                initialParams={{ logOut }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name={screenNames.login} component={LoginScreen} />
              <Stack.Screen
                name={screenNames.signUp}
                component={SignUpScreen}
              />
              <Stack.Screen
                name={screenNames.signUpCode}
                component={SignUpCodeScreen}
              />
            </>
          )
        }
        <Stack.Screen
          name={screenNames.completeProfile}
          component={CompleteProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
