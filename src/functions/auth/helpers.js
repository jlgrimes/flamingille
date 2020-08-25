import { Auth } from 'aws-amplify';
import store from '../../redux/store';
import { resetStore } from '../../redux/actions';

const signOut = async () => {
  store.dispatch(resetStore());
  Auth.signOut();
};

export { signOut };
