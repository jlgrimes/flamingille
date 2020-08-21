import {
  setUserAuthData,
  wipeUserAuthData,
  setCurrentUserDbData,
  setCandidateUsers,
  addCandidateUser,
  toggleMatch,
} from './actions';

const mapStateToProps = (state) => {
  return {
    userAuthData: state.userAuthData,
    userDbData: {
      currentUser: state.userDbData.currentUser,
      candidateUsers: state.userDbData.candidateUsers,
    },
    matched: state.matched,
    conversations: state.conversations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAuthData: (userAuthData) => dispatch(setUserAuthData(userAuthData)),
    wipeUserAuthData: (userAuthData) =>
      dispatch(wipeUserAuthData(userAuthData)),
    setCurrentUserDbData: (currentUser) =>
      dispatch(setCurrentUserDbData(currentUser)),
    setCandidateUsers: (cand) => dispatch(setCandidateUsers(cand)),
    addCandidateUser: (candidateUser) =>
      dispatch(addCandidateUser(candidateUser)),
    toggleMatch: (match) => dispatch(toggleMatch(match)),
  };
};

export { mapStateToProps, mapDispatchToProps };
