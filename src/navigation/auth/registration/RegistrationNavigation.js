import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalInfoScreen from '../../../screens/auth/registration/PersonalInfoScreen';
import UserTypeScreen from '../../../screens/auth/registration/UserTypeScreen';
import SetPasswordScreen from '../../../screens/auth/registration/SetPasswordScreen';
import ContactInfoScreen from '../../../screens/auth/registration/ContactInfoScreen';
import UserAgreementScreen from '../../../screens/auth/registration/UserAgreementScreen';
import RegistrationConfirmationScreen from '../../../screens/auth/registration/RegistrationConfirmationScreen';
import {StyleSheet, View} from 'react-native';
import RegistrationFooter from '../../../components/registration/RegistrationFooter';
import Header from '../../../components/header/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {selectSteps} from '../../../redux/reducers/steps/steps.selector';

const RegistrationStack = createNativeStackNavigator();

const RegistrationNavigation = () => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const {step} = useSelector(selectSteps);
  return (
    <View style={[styles.registrationScreen, {marginTop: statusBarHeight}]}>
      <Header />
      <RegistrationStack.Navigator screenOptions={{headerShown: false}}>
        <RegistrationStack.Screen
          name="RegistrationScreen0"
          component={UserTypeScreen}
        />
        <RegistrationStack.Screen
          name="RegistrationScreen1"
          component={PersonalInfoScreen}
        />
        <RegistrationStack.Screen
          name="RegistrationScreen2"
          component={ContactInfoScreen}
        />
        <RegistrationStack.Screen
          name="RegistrationScreen3"
          component={SetPasswordScreen}
        />
        <RegistrationStack.Screen
          name="RegistrationScreen4"
          component={UserAgreementScreen}
        />
        <RegistrationStack.Screen
          name="RegistrationScreen5"
          component={RegistrationConfirmationScreen}
        />
      </RegistrationStack.Navigator>
      <RegistrationFooter />
    </View>
  );
};

export default RegistrationNavigation;

const styles = StyleSheet.create({
  registrationScreen: {
    flex: 1,
  },
});
