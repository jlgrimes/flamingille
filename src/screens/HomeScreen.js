import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import { View, StyleSheet } from 'react-native';

import HomeCardStack from '../components/Home/HomeCardStack';
import MatchedModal from '../components/Home/MatchedModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeCardStack />
      <MatchedModal />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
