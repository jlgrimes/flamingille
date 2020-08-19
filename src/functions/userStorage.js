import { AsyncStorage } from 'react-native';
import store from '../redux/store';
import { setUserAuthData } from '../redux/actions';

const setUserAuthDataStorage = async (userAuthData) => {
  userAuthData = userAuthData ? userAuthData : '';
  try {
    await AsyncStorage.setItem('userAuthData', JSON.stringify(userAuthData));
  } catch (error) {
    console.log('Error with storing user data', error);
  }
};

const getUserAuthDataStorage = async () => {
  const userAuthData = await AsyncStorage.getItem('userAuthData');
  const data = JSON.parse(userAuthData);
  return data;
};

const loadUserAuthDataFromStorage = async () => {
  const userAuthData = await getUserAuthDataStorage();
  store.dispatch(setUserAuthData(userAuthData));
};

export {
  setUserAuthDataStorage,
  getUserAuthDataStorage,
  loadUserAuthDataFromStorage,
};
