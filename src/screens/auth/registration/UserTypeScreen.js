import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import RegistrationFooter from '../../../components/registration/RegistrationFooter';
import {useDispatch, useSelector} from 'react-redux';
import {setStep} from '../../../redux/reducers/steps/steps.actions';
import {useNavigation} from '@react-navigation/native';
import UserType from '../../../components/registration/UserType';
import IconWrapper from '../../../components/icon/IconWrapper';
import PersonIcon from '../../../assets/svg/Mask Group 186.svg';
import CompanyIcon from '../../../assets/svg/29-auction.svg';
import BaseButton from '../../../components/BaseButton';
import {selectType} from '../../../redux/reducers/registration/registration.selector';

export default function UserTypeScreen() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {customerType} = useSelector(selectType);

  useEffect(() => {
    dispatch(setStep(0));
  }, []);

  return (
    <View style={[styles.userTypeScreen]}>
      <Text style={styles.userTypeHeader}>რეგისტრაცია</Text>
      <Text style={styles.userTypeText}>მომხმარებლის ტიპი</Text>
      <View style={styles.typeButtonsWrapper}>
        <UserType type="PERSON" />
        <UserType type="COMPANY" />
      </View>
      <BaseButton
        isDisabled={!customerType}
        onPress={() => navigation.navigate('RegistrationScreen1')}
        buttonStyle={{
          width: 274,
          height: 42,
          backgroundColor: 'background: rgba(23, 23, 23, 0.1);',
        }}
        textStyle={{
          fontFamily: 'Helvetica Neue',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: 12,
          lineHeight: 15,
          color: 'rgba(10, 26, 38, 1)',
        }}>
        შემდეგი
      </BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  userTypeScreen: {
    flex: 1,
    alignItems: 'center',
  },
  userTypeHeader: {
    marginTop: 41,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 27,
    textTransform: 'uppercase',
  },
  userTypeText: {
    marginTop: 12,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 16,
  },
  typeButtonsWrapper: {
    marginTop: 22,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  typeBoxText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
});
