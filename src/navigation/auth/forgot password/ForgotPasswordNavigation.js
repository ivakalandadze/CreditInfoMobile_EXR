import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPasswordScreen1 from '../../../screens/auth/forgot password/ForgotPasswordScreen1';
import ForgotPasswordScreen3 from '../../../screens/auth/forgot password/ForgotPasswordScreen3';
import ForgotPasswordScreen2 from '../../../screens/auth/forgot password/ForgotPasswordScreen2';

const PasswordRecoveryStack = createNativeStackNavigator();

export default function ForgotPasswordNavigation() {
  return (
    <PasswordRecoveryStack.Navigator screenOptions={{headerShown: false}}>
      <PasswordRecoveryStack.Screen
        name="UserInput"
        component={ForgotPasswordScreen1}
      />
      <PasswordRecoveryStack.Screen
        name="OTPInput"
        component={ForgotPasswordScreen2}
      />
      <PasswordRecoveryStack.Screen
        name="NewPassword"
        component={ForgotPasswordScreen3}
      />
    </PasswordRecoveryStack.Navigator>
  );
}

const styles = StyleSheet.create({});
