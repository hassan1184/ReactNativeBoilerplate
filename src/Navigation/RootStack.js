import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppNavigation/AppStack';
import AuthStack from './AuthNavigation/AuthStack';
import useAuth from '../Auth/useAuth';
const RootStack = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
