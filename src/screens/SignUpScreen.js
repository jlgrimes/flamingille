import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet, Text } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

import { SocialButtons } from '../components/SocialButtons';

import { screenNames } from '../constants/screenNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const SignUpScreen = ({ navigation, setUserAuthData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [validEmail, setValidEmail] = useState(true);
  const [passwordStrong, setPasswordStrong] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [signUpError, setSignUpError] = useState(null);

  const signUp = async () => {
    // check if email has @ in it
    if (!email.includes('@')) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }

    if (password.length < 8) {
      setPasswordStrong(false);
    } else {
      setPasswordStrong(true);

      // check if passwords match
      if (password !== confirmPassword) {
        setPasswordsMatch(false);
      } else {
        setPasswordsMatch(true);
      }
    }

    if (!passwordsMatch || !passwordStrong || !validEmail) {
      return;
    }

    try {
      const user = await Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });

      const userAuthData = { username: email };

      // an intermediate step - we set the redux state to be the user's incomplete account
      // this can be used in the SignUpCodeScreen component to "pass" the userAuthData object
      setUserAuthData(userAuthData);

      navigation.navigate(screenNames.signUpCode);
    } catch (error) {
      const { message } = error;
      setSignUpError(message);
    }
  };

  return (
    <View style={styles.container}>
      <SocialButtons logIn={false} />
      <TextInput
        label="Email"
        onChange={(e) => setEmail(e.nativeEvent.text)}
        error={!validEmail}
      />
      <TextInput
        label="Password"
        secureTextEntry={true}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        error={!passwordsMatch}
      />
      <TextInput
        label="Confirm Password"
        secureTextEntry={true}
        onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
        error={!passwordsMatch}
      />
      <HelperText type="error" visible={!validEmail}>
        Email is invalid
      </HelperText>
      <HelperText type="error" visible={!passwordStrong}>
        Password is not strong enough. Please increase to at least 8 characters.
      </HelperText>
      <HelperText type="error" visible={!passwordsMatch}>
        Passwords don't match
      </HelperText>
      <HelperText type="error" visible={signUpError}>
        {signUpError}
      </HelperText>
      <SocialIcon
        title="Sign Up"
        button
        type="medium"
        iconStyle={{ width: 0 }}
        onPress={() => signUp()}
      />
    </View>
  );
};

export default connect(null, mapDispatchToProps)(SignUpScreen);
