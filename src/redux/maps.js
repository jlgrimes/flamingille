import { setUserData } from './actions';

export const mapStateToProps = (state) => {
  return { userData: state.userData };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) => dispatch(setUserData(userData)),
  };
};
