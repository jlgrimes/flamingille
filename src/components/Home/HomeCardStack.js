import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { View, Text, StyleSheet } from 'react-native';

import HomeCard from './HomeCard';

const HomeCardStack = ({ navigation, userDbData }) => {
  let homeCardUsers = userDbData.candidateUsers;
  return (
    <>
      {homeCardUsers && homeCardUsers.length > 0 ? (
        homeCardUsers.map((user) => <HomeCard key={user.id} user={user} />)
      ) : (
        <Text>Nobody there :(</Text>
      )}
    </>
  );
};

export default connect(mapStateToProps)(HomeCardStack);
