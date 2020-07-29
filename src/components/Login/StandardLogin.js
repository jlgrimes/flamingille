import React, { useState } from 'react';
import { Input, Text, SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

const StandardLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Input
        placeholder="Email"
        onChange={(e) => setUsername(e.nativeEvent.text)}
      />
      <Input
        placeholder="Password"
        type="password"
        secureTextEntry={true}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
      <SocialIcon
        title="Log In"
        button
        type="medium"
        iconStyle={{ width: 0 }}
        onPress={() => Auth.signIn(username, password)}
      />
    </>
  );
};

export { StandardLogin };
