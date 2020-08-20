import { listUsers, listMatches } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';

// used in Homescreen.js
export const fetchMatches = async (currentUser) => {
  const currentUserId = currentUser.id;
  const filter = {
    sender: {
      eq: currentUserId,
    },
  };
  const matches = await API.graphql(
    graphqlOperation(listMatches, { filter: filter }),
  );
  return matches.data.listMatches.items;
};

// used in Homescreen.js
// this is where the "sorting algorithm is going to take place"
// all we have for our sorting algorithm now is, are they not the logged in person
export const fetchCandidates = async (currentUser, matches) => {
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
