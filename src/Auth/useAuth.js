import {useContext} from 'react';
import authStorage from './Storage';
import AuthContext from './context';
export default useAuth = () => {
  const {user, setUser} = useContext(AuthContext);
  // console.log('=======user====>>>', user);
  const storeUserDetails = userDetails => {
    setUser(userDetails);
    authStorage.storeUserDetails(userDetails);
  };
  const logOut = () => {
    authStorage.deleteUserDetails();
    authStorage.deleteFCMToken();
    setUser(null);
  };
  return {
    user,
    setUser,
    storeUserDetails,
    logOut,
  };
};
