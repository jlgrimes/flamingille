import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { screenNames, screenIcons } from '../constants/screenMetadata';

const TabBarIcon = ({ route, focused, color, size }) => {
  let iconName;

  if (route.name) {
    iconName = focused
      ? screenIcons[route.name].filled
      : screenIcons[route.name].outline;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export { TabBarIcon };
