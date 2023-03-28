import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthNavigation from './auth/AuthNavigation';
import {useSelector} from 'react-redux';
import {selectAuth} from '../redux/reducers/auth/auth.selector';
import MainNavigation from './main/MainNavigation';

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function RootNavigation() {
  const {isAuth} = useSelector(selectAuth);
  return (
    <NavigationContainer theme={LightTheme}>
      {isAuth ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
