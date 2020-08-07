import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

import HomeCard from './HomeCard';

const HomeCardStack = ({ navigation, userDbData }) => {
  const homeCardUsers = userDbData.candidateUsers;
  return (
    <>
      {homeCardUsers &&
        homeCardUsers.items &&
        homeCardUsers.items.map((user) => (
          <HomeCard key={user.id} user={user} />
        ))}
    </>
  );
};

export default connect(mapStateToProps)(HomeCardStack);
