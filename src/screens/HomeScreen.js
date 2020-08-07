import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet, Text } from 'react-native';
import HomeCardStack from '../components/Home/HomeCardStack';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers, listMatches } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = ({
  navigation,
  userAuthData,
  userDbData,
  setCurrentUserDbData,
  setCandidateUsers,
}) => {
  useEffect(() => {
    const fetchMatches = async (currentUser) => {
      const currentUserId = currentUser.items[0].id;
      const filter = {
        sender: {
          eq: currentUserId,
        },
      };
      const matches = await API.graphql(
        graphqlOperation(listMatches, { filter: filter }),
      );
      return matches.data.listMatches.items;
    };

    // this is where the "sorting algorithm is going to take place"
    // all we have for our sorting algorithm now is, are they not the logged in person
    const fetchCandidates = async (currentUser, matches) => {
      const filter = {
        username: {
          ne: userAuthData.username,
        },
      };
      const evt = await API.graphql(
        graphqlOperation(listUsers, { filter: filter }),
      );

      const currentUserId = currentUser.items[0].id;
      const candidates = evt.data.listUsers.items;

      const filteredCandidates = candidates.filter((candidate) => {
        const targetMatches = matches.filter(
          (match) =>
            match.sender === currentUserId && match.target === candidate.id,
        );
        return targetMatches.length > 0;
      });

      return filteredCandidates;
    };

    // yeah yeah this code looks incredibly redundant, but hopefully the fetchUsers
    // function will at least be somewhat different than, the opposite of this one...
    const fetchCurrentUser = async () => {
      const filter = {
        username: {
          eq: userAuthData.username,
        },
      };
      const evt = await API.graphql(
        graphqlOperation(listUsers, { filter: filter }),
      );
      return evt.data.listUsers;
    };

    const onHomeScreenRender = async () => {
      // fetches the current user from the database
      const currentUser = await fetchCurrentUser();
      setCurrentUserDbData(currentUser);

      // fetches the matches that the current user has made
      // this is used to filter out the candidates that we have matched already
      const matches = await fetchMatches(currentUser);

      // fetches the list of candidates we display on the home screen
      const candidates = await fetchCandidates(currentUser, matches);
      setCandidateUsers(candidates);
    };

    onHomeScreenRender();
  }, []);

  return (
    <View style={styles.container}>
      <HomeCardStack />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
