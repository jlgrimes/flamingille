import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../redux/maps';

import { View, StyleSheet, Text } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

import { SocialButtons } from '../components/SocialButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

// please help bro this page sucks
const SignUpProfileScreen = () => {
  const submitProfile = () => {
    console.log('yo');
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Code"
        // onChange={(e) => setCode(e.nativeEvent.text)}
      />

      <SocialIcon
        title="Sign Up"
        button
        type="medium"
        iconStyle={{ width: 0 }}
        onPress={() => submitProfile()}
      />
    </View>
  );
};

export default connect(mapStateToProps)(SignUpProfileScreen);
