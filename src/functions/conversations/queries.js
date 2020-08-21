import { listConversationUsers } from '../../graphql/queries';
import { addConversationUser } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';

const getCurrentUserConversationUsersEntries = async () => {
  const state = store.getState();

  const filter = {
    conversationID: {
      eq: state.userDbData.currentUser.id,
    },
  };

  const conversationUsers = await API.graphql(
    graphqlOperation(listConversationUsers, { filter: filter }),
  );

  return conversationUsers.data.listConversationUsers.items;
};

export { getCurrentUserConversationUsersEntries };
