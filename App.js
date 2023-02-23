import React from 'react';
import {View} from 'react-native';
import Login from './src/Screens/Authentication/Login/Login';
import Splash from './src/Screens/Authentication/Splash/Splash';
import AuthStack from './src/Navigation/AuthNavigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
