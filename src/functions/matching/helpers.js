import { listMatches, createMatch } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';
import { toggleMatch, setCandidateUsers } from '../../redux/actions';

const checkMatchCompleted = async (senderId, targetId) => {
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
  const matchesList = matches.data.listMatches.items;
  if (matchesList.length > 0) {
    store.dispatch(toggleMatch(state.user));
  }
};

const matchWithCandidate = async () => {
  const state = store.getState();
  const { user, userDbData } = state;

  const target = user;
  const sender = userDbData.currentUser.items[0];

  const match = {
    sender: sender.id,
    target: target.id,
    status: true,
  };

  const res = await API.graphql(
    graphqlOperation(createMatch, { input: match }),
  );

  await checkMatchCompleted(sender.id, target.id);

  setCandidateUsers(
    userDbData.candidateUsers.filter(
      (candidateUser) => candidateUser.id === sender.id,
    ),
  );
};

export { checkMatchCompleted, matchWithCandidate };
