import { fetchReverseMatch, addMatch } from '.';
import { addConversation, addConversationUsersEntries } from '../conversations';
import store from '../../redux/store';
import { toggleMatch, setCandidateUsers } from '../../redux/actions';

const checkMatchCompleted = async (senderId, targetId, cardUser) => {
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

  // adds the match to the Matches table
  await addMatch(sender, target);

  // runs queries to see if the match is completed with the addition of this match
  await checkMatchCompleted(sender.id, target.id, cardUser);

  const conversationAddRes = await addConversation();
  const conversationID = conversationAddRes.data.createConversation.id;

  await addConversationUsersEntries(sender.id, target.id, conversationID);

  // updates the redux store accordingly to render the React properly
  store.dispatch(
    setCandidateUsers(
      userDbData.candidateUsers.filter(
        (candidateUser) => candidateUser.id === sender.id,
      ),
    ),
  );
};

export { checkMatchCompleted, matchWithCandidate };
