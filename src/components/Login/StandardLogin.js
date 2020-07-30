import React, { useState } from 'react';
import { Alert } from 'react-native';
import { TextInput, HelperText, Title } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

const StandardLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernamePasswordCorrect, setUsernamePasswordCorrect] = useState(true);

  const logIn = async (username, password) => {
    try {
      const user = await Auth.signIn(username, password);
    } catch (error) {
      setUsernamePasswordCorrect(false);
    }
  };

  return (
    <>
      <Title>Login</Title>
      <HelperText type="error" visible={!usernamePasswordCorrect}>
        Email or password is incorrect!
      </HelperText>
      <TextInput
        label="Email"
        onChange={(e) => setUsername(e.nativeEvent.text)}
        error={!usernamePasswordCorrect}
      />
      <TextInput
        label="Password"
        secureTextEntry={true}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        error={!usernamePasswordCorrect}
      />
      <SocialIcon
        title="Log In"
        button
        type="medium"
        iconStyle={{ width: 0 }}
        onPress={() => logIn(username, password)}
      />
    </>
  );
};

export { StandardLogin };
