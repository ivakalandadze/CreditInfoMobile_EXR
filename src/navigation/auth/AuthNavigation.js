import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import ForgotPasswordScreen1 from '../../screens/auth/forgot password/ForgotPasswordScreen1';
import LogInScreen from '../../screens/auth/LogInScreen';
import RegistrarionScreen from '../../screens/auth/RegistrarionScreen';
import ForgotPasswordNavigation from './forgot password/ForgotPasswordNavigation.js';
import RegistrationNavigation from './registration/RegistrationNavigation';

const AuthStack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="LogIn" component={LogInScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordNavigation}
      />
      <AuthStack.Screen
        name="Registration"
        component={RegistrationNavigation}
      />
    </AuthStack.Navigator>
  );
}
