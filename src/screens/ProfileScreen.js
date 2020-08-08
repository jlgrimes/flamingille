import React from 'react';
import { View, StyleSheet } from 'react-native';

// Redux imports
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

import ProfileCard from '../components/Profile/ProfileCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

const ProfileScreen = ({ navigation, userDbData }) => {
  return (
    <View style={styles.container}>
      <ProfileCard user={userDbData.currentUser.items[0]} />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
