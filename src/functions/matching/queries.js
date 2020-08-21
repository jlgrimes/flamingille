import { listUsers, listMatches } from '../../graphql/queries';
import { createMatch } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';

const addMatch = async (sender, target) => {
  const match = {
    sender: sender.id,
    target: target.id,
    status: true,
  };

  const res = await API.graphql(
    graphqlOperation(createMatch, { input: match }),
  );

  return res;
};

// used in Homescreen.js
const fetchMatches = async (currentUser) => {
  const filter = {
    sender: {
      eq: currentUser.id,
    },
  };
  const matches = await API.graphql(
    graphqlOperation(listMatches, { filter: filter }),
  );
  console.log(matches);
  return matches.data.listMatches.items;
};

// used for when we want to check if the second user matches the first
// when the first matches with second (check for match)
const fetchReverseMatch = async (senderId, targetId) => {
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
  return matches.data.listMatches.items;
};

// used in Homescreen.js
// this is where the "sorting algorithm is going to take place"
// all we have for our sorting algorithm now is, are they not the logged in person
const fetchCandidates = async (currentUser, matches) => {
  const state = store.getState();

  const filter = {
    username: {
      ne: state.userAuthData.username,
    },
  };
  const evt = await API.graphql(
    graphqlOperation(listUsers, { filter: filter }),
  );

  const currentUserId = currentUser.id;
  const candidates = evt.data.listUsers.items;

  const filteredCandidates = candidates.filter((candidate) => {
    const targetMatches = matches.filter(
      (match) =>
        match.sender === currentUserId && match.target === candidate.id,
    );
    return targetMatches.length === 0;
  });

  return filteredCandidates;
};

export { addMatch, fetchMatches, fetchReverseMatch, fetchCandidates };
