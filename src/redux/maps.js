import {
  setUserAuthData,
  wipeUserAuthData,
  setCurrentUserDbData,
  setCandidateUsers,
} from './actions';

const mapStateToProps = (state) => {
  return {
    userAuthData: state.userAuthData,
    userDbData: {
      currentUser: state.userDbData.currentUser,
      candidateUsers: state.userDbData.candidateUsers,
    },
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
  };
};

export { mapStateToProps, mapDispatchToProps };
