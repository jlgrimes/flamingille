import React, { useState } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

const SignUpCodeScreen = ({ userData }) => {
  console.log(userData);
  const [code, setCode] = useState('');
  const [invalidCodeError, setInvalidCodeError] = useState(null);

  const confirmCode = async () => {
    try {
      console.log(userData);
      console.log(userData.username);
      await Auth.confirmSignUp(userData.username, code);
    } catch (error) {
      setInvalidCodeError(error);
      console.log('error confirming sign up', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Code"
        onChange={(e) => setCode(e.nativeEvent.text)}
        error={invalidCodeError}
      />

      <HelperText type="error" visible={invalidCodeError}>
        {invalidCodeError}
      </HelperText>
      <SocialIcon
        title="Sign Up"
        button
        type="medium"
        iconStyle={{ width: 0 }}
        onPress={() => confirmCode()}
      />
    </View>
  );
};

export default connect(mapStateToProps)(SignUpCodeScreen);
