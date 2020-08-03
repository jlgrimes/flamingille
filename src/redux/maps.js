import { setUserData, wipeUserData } from './actions';

const mapStateToProps = (state) => {
  return { userData: state.userData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) => dispatch(setUserData(userData)),
    wipeUserData: (userData) => dispatch(wipeUserData(userData)),
  };
};

export { mapStateToProps, mapDispatchToProps };
