import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

const HomeCardStack = ({ navigation }) => {
  const [homeCardUsers, setHomeCardUsers] = useState(undefined);

  useEffect(() => {
    // someone help this query is broken
    const fetchUsers = async () => {
      const evt = await API.graphql(graphqlOperation(listUsers));
      setHomeCardUsers(evt.data.listUsers);
    };
    fetchUsers();
  }, []);

  return <></>;
};

export default connect(mapStateToProps)(HomeCardStack);
