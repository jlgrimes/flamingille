import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet, Text } from 'react-native';
import HomeCardStack from '../components/Home/HomeCardStack';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const HomeScreen = ({
  navigation,
  userAuthData,
  setCurrentUserDbData,
  setCandidateUsers,
}) => {
  useEffect(() => {
    // this is where the "sorting algorithm is going to take place"
    // all we have for our sorting algorithm now is, are they not the logged in person
    const fetchUsers = async () => {
      const filter = {
        username: {
          ne: userAuthData.username,
        },
      };
      const evt = await API.graphql(
        graphqlOperation(listUsers, { filter: filter }),
      );
      setCandidateUsers(evt.data.listUsers);
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <HomeCardStack />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
