import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet } from 'react-native';

import HomeCardStack from '../components/Home/HomeCardStack';
import MatchedModal from '../components/Home/MatchedModal';

// functions import
import { fetchCurrentUser, fetchMatches, fetchCandidates } from '../functions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ setCurrentUserDbData, setCandidateUsers }) => {
  useEffect(() => {
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
      <MatchedModal />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
