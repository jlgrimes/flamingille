import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

const HomeCardStack = ({ navigation }) => {
  useEffect(() => {
    // someone help this query is broken
    const fetchUsers = async () => {
      const allUsers = await API.graphql(graphqlOperation(queries.listUsers));

      // this outputs scary scary o no
      console.log(allUsers);
    };
    fetchUsers();
  }, []);
  return <></>;
};

export default connect(mapStateToProps)(HomeCardStack);
