import { listMatches } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';
import { toggleMatch } from '../../redux/actions';

export const checkMatchCompleted = async (senderId, targetId) => {
  const state = store.getState();

  // now we look up the match but in reverse. if the other person matched you,
  // it's a match made in heaven!
  const reverseMatchFilter = {
    sender: {
      eq: targetId,
    },
    target: {
      eq: senderId,
    },
    status: {
      eq: true,
    },
  };

  const matches = await API.graphql(
    graphqlOperation(listMatches, { filter: reverseMatchFilter }),
  );
  console.log(matches);
  const matchesList = matches.data.listMatches.items;
  if (matchesList.length > 0) {
    store.dispatch(toggleMatch(state.user));
  }
};