import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

import HomeCard from './HomeCard';

const HomeCardStack = ({ navigation, userData }) => {
  const [homeCardUsers, setHomeCardUsers] = useState(undefined);

  useEffect(() => {
    // this is where the "sorting algorithm is going to take place"
    // all we have for our sorting algorithm now is, are they not the logged in person
    const fetchUsers = async () => {
      const filter = {
        username: {
          ne: userData.username,
        },
      };
      const evt = await API.graphql(
        graphqlOperation(listUsers, { filter: filter }),
      );
      setHomeCardUsers(evt.data.listUsers);
    };
    fetchUsers();
  }, []);

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
