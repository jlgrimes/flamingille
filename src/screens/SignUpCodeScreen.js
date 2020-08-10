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

const SignUpCodeScreen = ({ navigation, userAuthData }) => {
  const [code, setCode] = useState('');
  const [invalidCodeError, setInvalidCodeError] = useState(null);

  const confirmCode = async () => {
    try {
      console.log(userAuthData.username);
      console.log(code);
      await Auth.confirmSignUp(userAuthData.username, code);
      navigation.navigate('Complete Profile');
    } catch (error) {
      setInvalidCodeError(error);
      console.log('error confirming sign up', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Please check your email for a code and enter it below.</Text>
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
