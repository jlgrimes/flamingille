import { listMatches } from '../../graphql/queries';
import { addMatch, fetchReverseMatch } from './queries';
import { API, graphqlOperation } from 'aws-amplify';
import store from '../../redux/store';
import { toggleMatch, setCandidateUsers } from '../../redux/actions';

const checkMatchCompleted = async (senderId, targetId, cardUser) => {
  const state = store.getState();

  // now we look up the match but in reverse. if the other person matched you,
  // it's a match made in heaven!
  const matchesList = await fetchReverseMatch(senderId, targetId);

  if (matchesList.length > 0) {
    store.dispatch(toggleMatch(cardUser));
  }
};

const matchWithCandidate = async (cardUser) => {
  const state = store.getState();
  const { userDbData } = state;

  // cardUser is the user's card who got liked
  const target = cardUser;

  // the "sender" is who is currently logged in
  const sender = userDbData.currentUser;

  await addMatch(sender, target);
  await checkMatchCompleted(sender.id, target.id, cardUser);

  store.dispatch(
    setCandidateUsers(
      userDbData.candidateUsers.filter(
        (candidateUser) => candidateUser.id === sender.id,
      ),
    ),
  );
};

export { checkMatchCompleted, matchWithCandidate };
