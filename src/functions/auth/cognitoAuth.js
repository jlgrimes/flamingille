import { Hub } from 'aws-amplify';
import store from '../../redux/store';
import { setUserAuthData, wipeUserAuthData } from '../../redux/actions';
import { setUserAuthDataStorage } from '../../functions';

export const hubListen = async () => {
  Hub.listen('auth', ({ payload: { event, data } }) => {
    // console.log(event);
    switch (event) {
      case 'signIn':
        store.dispatch(setUserAuthData(data));
        store.dispatch(setUserAuthDataStorage(data));
        break;
      case 'cognitoHostedUI':
        break;
      case 'signOut':
        store.dispatch(wipeUserAuthData());
        store.dispatch(setUserAuthDataStorage(null));
        break;
      case 'signIn_failure':
        console.log('Sign in failure!!', data);
        break;
      case 'cognitoHostedUI_failure':
        console.log('Sign in failure', data);
        break;
    }
  });
};
