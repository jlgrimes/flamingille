import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { View, Text, StyleSheet } from 'react-native';

import HomeCard from './HomeCard';

const HomeCardStack = ({ navigation, userDbData }) => {
  const homeCardUsers = userDbData.candidateUsers;
  return (
    <>
      {homeCardUsers &&
      homeCardUsers.items &&
      homeCardUsers.items.length > 0 ? (
        homeCardUsers.items.map((user) => (
          <HomeCard key={user.id} user={user} />
        ))
      ) : (
        <Text>Nobody is left :(</Text>
      )}
    </>
  );
};

export default connect(mapStateToProps)(HomeCardStack);
