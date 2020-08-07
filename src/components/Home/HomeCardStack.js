import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

import HomeCard from './HomeCard';

const HomeCardStack = ({ navigation }) => {
  const [homeCardUsers, setHomeCardUsers] = useState(undefined);

  useEffect(() => {
    const fetchUsers = async () => {
      const evt = await API.graphql(graphqlOperation(listUsers));
      setHomeCardUsers(evt.data.listUsers);
    };
    fetchUsers();
  }, []);

  return (
    <>
      {homeCardUsers &&
        homeCardUsers.items &&
        homeCardUsers.items.map((user) => <HomeCard user={user} />)}
    </>
  );
};

export default connect(mapStateToProps)(HomeCardStack);
