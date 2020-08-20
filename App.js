// React imports
import React, { useEffect } from 'react';

// AWS imports
import awsconfig from './aws-exports.js';
import Amplify from 'aws-amplify';

// Redux imports
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './src/redux/maps';

// UI Library Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen imports
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignUpCodeScreen from './src/screens/SignUpCodeScreen';
import CompleteProfileScreen from './src/screens/CompleteProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ConversationsScreen from './src/screens/ConversationsScreen';

// Component imports
import { TabBarIcon } from './src/components/TabBarIcon';

// Constants imports
import { screenNames } from './src/constants/screenMetadata';

// function imports
import {
  loadUserAuthDataFromStorage,
  urlOpener,
  hubListen,
} from './src/functions/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener,
  },
});

const App = ({ userAuthData }) => {
  useEffect(() => {
    // first thing we want to do on app load is load the user data from storage
    // based on this call, the "userAuthData" variable will be set which changes the render
    // method of Login/Home
    loadUserAuthDataFromStorage();

    // this is a listener for login/logout events by Amplify Auth
    hubListen();
  }, []);

  const renderHome = () => {
    if (userAuthData) {
      if (userAuthData.username.includes('Google')) {
        return true;
      }
      if (userAuthData.attributes && userAuthData.attributes.email_verified) {
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
                return (
                  <TabBarIcon
                    route={route}
                    focused={focused}
                    color={color}
                    size={size}
                  />
                );
              },
            })}>
            <Tab.Screen name={screenNames.home} component={HomeScreen} />
            <Tab.Screen
              name={screenNames.conversations}
              component={ConversationsScreen}
            />
            {/*<Tab.Screen name={screenNames.profile} component={ProfileScreen} /> */}
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
