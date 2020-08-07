import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { Card, Title, Paragraph } from 'react-native-paper';
import { Text } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

const HomeCardStack = ({ navigation }) => {
  const [homeCardUsers, setHomeCardUsers] = useState(undefined);

  useEffect(() => {
    // someone help this query is broken
    const fetchUsers = async () => {
      const evt = await API.graphql(graphqlOperation(listUsers));
      // console.log(evt);
      setHomeCardUsers(evt.data.listUsers);
    };
    fetchUsers();
  }, []);

  return (
    <>
      {homeCardUsers &&
        homeCardUsers.items &&
        homeCardUsers.items.map((user) => (
          <Card key={user.id}>
            <Card.Content>
              <Title>{user.name}</Title>
              <Paragraph>{user.description}</Paragraph>
            </Card.Content>
          </Card>
        ))}
    </>
  );
};

export default connect(mapStateToProps)(HomeCardStack);
