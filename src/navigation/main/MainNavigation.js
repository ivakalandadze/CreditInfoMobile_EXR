import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../../screens/main/MainScreen';

const MainStack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Main" component={MainScreen} />
    </MainStack.Navigator>
  );
}
