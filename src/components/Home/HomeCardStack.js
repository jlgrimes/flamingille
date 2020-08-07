import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/maps';

import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

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
        homeCardUsers.items.map((user) => (
          <Card key={user.id}>
            <Card.Content>
              <Title>{user.name}</Title>
              <Paragraph>{user.description}</Paragraph>
              <View style={styles.icons}>
                <Icon
                  raised
                  name="heart"
                  type="font-awesome"
                  color="red"
                  onPress={() => console.log('hello')}
                />
                <Icon
                  raised
                  name="close"
                  type="font-awesome"
                  color="gray"
                  onPress={() => console.log('nope')}
                />
              </View>
            </Card.Content>
          </Card>
        ))}
    </>
  );
};

export default connect(mapStateToProps)(HomeCardStack);
