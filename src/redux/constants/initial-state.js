export const initialState = {
  userAuthData: null,
  userDbData: {
    currentUser: null,
    candidateUsers: [],
  },

  // matched is what renders the "you got a match! modal"
  // if it's not null, it's the user of the person you matched with
  matched: null,

  // the conversations that get rendered in Conversations page
  conversations: [],
};
