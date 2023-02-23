import AsyncStorage from '@react-native-async-storage/async-storage';

const key1 = 'userDetails';
const key5 = 'storeFcmToken';

const storeUserDetails = async userDetails => {
  // console.log('====stor=function=data==>', userDetails);
  try {
    await AsyncStorage.setItem(key1, JSON.stringify(userDetails));
  } catch (error) {
    console.log('Error occured', error);
  }
};

const getUserDetails = async value => {
  try {
    const res = await AsyncStorage.getItem(key1);
    // console.log('========get===user===function====data=====>>>>', res);
    return JSON.parse(res);
  } catch (error) {
    console.log('Error getting the auth Token ', error);
  }
};
const deleteUserDetails = async () => {
  try {
    await AsyncStorage.removeItem(key1);
  } catch (error) {
    console.log('Error removing the auth Token ', error);
  }
};
const storeFcmToken = async authToken => {
  try {
    await AsyncStorage.setItem(key5, authToken);
  } catch (error) {
    console.log('Error Storing  the auth Token ', error);
  }
};
const getFcmToken = async () => {
  try {
    return await AsyncStorage.getItem(key5);
  } catch (error) {
    console.log('Error getting the auth Token ', error);
  }
};
const deleteFCMToken = async () => {
  try {
    await AsyncStorage.removeItem(key5);
  } catch (error) {
    console.log('Error removing the auth Token ', error);
  }
};

export default {
  storeUserDetails,
  getUserDetails,
  deleteUserDetails,
  storeFcmToken,
  getFcmToken,
  deleteFCMToken,
};
