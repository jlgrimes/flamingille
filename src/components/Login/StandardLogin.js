import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps';

import { Alert } from 'react-native';
import { TextInput, HelperText, Title } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

const StandardLogin = ({ setUserAuthData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailPasswordCorrect, setEmailPasswordCorrect] = useState(true);

  const logIn = async (email, password) => {
    try {
      const userAuthData = await Auth.signIn(email, password);
      setUserAuthData(userAuthData);
    } catch (error) {
      console.log(error);
      setEmailPasswordCorrect(false);
    }
  };

  return (
    <>
      <HelperText type="error" visible={!emailPasswordCorrect}>
        Email or password is incorrect
      </HelperText>
      <TextInput
        label="Email"
        onChange={(e) => setEmail(e.nativeEvent.text)}
        error={!emailPasswordCorrect}
      />
      <TextInput
        label="Password"
        secureTextEntry={true}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        error={!emailPasswordCorrect}
      />
      <SocialIcon
        title="Log In"
        button
        type="medium"
        iconStyle={{ width: 0 }}
        onPress={() => logIn(email, password)}
      />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StandardLogin);
