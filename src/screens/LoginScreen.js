import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import StandardLogin from '../components/Login/StandardLogin';
import SignUpButton from '../components/Login/SignUpButton';
import { SocialButtons } from '../components/SocialButtons';

import { connect } from 'react-redux';
import { mapStateToProps } from '../redux/maps';

import { screenNames } from '../constants/screenMetadata';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const LoginScreen = ({ navigation, userDbData }) => {
  return (
    <View style={styles.container}>
      <StandardLogin />
      <SignUpButton navigation={navigation} />
      <SocialButtons ifLogin={true} />
    </View>
  );
};

export default connect(mapStateToProps)(LoginScreen);
