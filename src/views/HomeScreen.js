import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
};

export { HomeScreen };
