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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Component imports
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignUpCodeScreen from './src/screens/SignUpCodeScreen';
import CompleteProfileScreen from './src/screens/CompleteProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Constants imports
import { screenNames } from './src/constants/screenNames';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const App = ({ userAuthData, setUserAuthData, wipeUserAuthData }) => {
  const setUserAuthDataStorage = async (userAuthData) => {
    userAuthData = userAuthData ? userAuthData : '';
    try {
      await AsyncStorage.setItem('userAuthData', JSON.stringify(userAuthData));
    } catch (error) {
      console.log('Error with storing user data', error);
    }
  };

  const getUserAuthDataStorage = async () => {
    const userAuthData = await AsyncStorage.getItem('userAuthData');
    const data = JSON.parse(userAuthData);
    return data;
  };

  const loadUserAuthDataFromStorage = async () => {
    const userAuthData = await getUserAuthDataStorage();
    setUserAuthData(userAuthData);
  };

  useEffect(() => {
    const hubListen = async () => {
      Hub.listen('auth', ({ payload: { event, data } }) => {
        console.log(event);
        switch (event) {
          case 'signIn':
            setUserAuthData(data);
            setUserAuthDataStorage(data);
            break;
          case 'cognitoHostedUI':
            break;
          case 'signOut':
            wipeUserAuthData();
            setUserAuthDataStorage(null);
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

    // first thing we want to do on app load is load the user data from storage
    // based on this call, the "userAuthData" variable will be set which changes the render
    // method of Login/Home
    loadUserAuthDataFromStorage();

    // this is a listener for login/logout events by Amplify Auth
    hubListen();
  }, []);

  const logOut = async () => {
    await Auth.signOut();
    wipeUserAuthData();
    setUserAuthDataStorage();
  };

  // console.log(userAuthData);

  const renderHome = () => {
    if (userAuthData) {
      if (userAuthData.username.includes('Google')) {
        return true;
      }
      if (userAuthData.attributes.email_verified) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <NavigationContainer>
      {
        // we render home this way because of "protected routes" and stuff like
        // more info here: https://reactnavigation.org/docs/auth-flow
        renderHome() ? (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}>
            <Tab.Screen
              name={screenNames.home}
              component={HomeScreen}
              initialParams={{ logOut }}
            />
            <Tab.Screen
              name={screenNames.settings}
              component={SettingsScreen}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name={screenNames.login} component={LoginScreen} />
            <Stack.Screen name={screenNames.signUp} component={SignUpScreen} />
            <Stack.Screen
              name={screenNames.signUpCode}
              component={SignUpCodeScreen}
            />
            <Stack.Screen
              name={screenNames.completeProfile}
              component={CompleteProfileScreen}
            />
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
