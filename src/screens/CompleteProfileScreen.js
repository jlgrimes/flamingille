import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../redux/maps';

import { View, StyleSheet, Text } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

import { SocialButtons } from '../components/SocialButtons';

import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../graphql/mutations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

// please help bro this page sucks
const CompleteProfileScreen = ({ navigation, userData }) => {
  const [names, setNames] = useState('');
  const [description, setDescription] = useState('');

  const [nameBlank, setNameBlank] = useState(false);
  const [descriptionBlank, setDescriptionBlank] = useState(false);

  const submitProfile = async () => {
    if (names.length === 0) {
      setNameBlank(true);
    }
    if (description.length === 0) {
      setDescriptionBlank(true);
    }
    if (nameBlank || descriptionBlank) {
      return;
    }

    console.log(names);
    console.log(description);

    const userDetails = {
      username: userData.username,
      name: names,
      description: description,
    };
    const res = await API.graphql(
      graphqlOperation(createUser, { input: userDetails }),
    );
    console.log(res);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput label="Names" onChange={(e) => setNames(e.nativeEvent.text)} />

      <HelperText type="error" visible={nameBlank}>
        Name cannot be empty
      </HelperText>

      <TextInput
        label="Description"
        onChange={(e) => setDescription(e.nativeEvent.text)}
      />

      <HelperText type="error" visible={descriptionBlank}>
        Description cannot be empty
      </HelperText>

      <SocialIcon
        title="Complete Profile"
        button
        type="medium"
        iconStyle={{ width: 0 }}
        onPress={() => submitProfile()}
      />
    </View>
  );
};

export default connect(mapStateToProps)(CompleteProfileScreen);
