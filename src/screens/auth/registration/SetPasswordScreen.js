import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setStep} from '../../../redux/reducers/steps/steps.actions';
import PasswordInputs from '../../../components/forgot password/ForgotPasswordInputs';
import InfoIcon from '../../../assets/svg/Mask Group 274.svg';
import BaseButton from '../../../components/BaseButton';
import {setPassword} from '../../../redux/reducers/registration/registration.actions';
import {useNavigation} from '@react-navigation/native';
import {selectType} from '../../../redux/reducers/registration/registration.selector';
import registerUser from '../../../utils/registerUser';
import {authUserRequest} from '../../../utils/authUserRequest';
import {updateToken} from '../../../redux/reducers/auth/auth.actions';
import {selectAuth} from '../../../redux/reducers/auth/auth.selector';

export default function SetPasswordScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    firstName,
    lastName,
    password,
    customerType,
    userName,
    address,
    birthDate,
    email,
    countryId,
  } = useSelector(selectType);
  const [newPass, setNewPass] = useState(password || '');
  const [newPassConfirm, setNewPassConfirm] = useState(password || '');
  const [passwordValidation, setPasswordValidation] = useState('');
  const {accessToken} = useSelector(selectAuth);

  const regex = new RegExp(
    '^(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[0-9]{1,})(?=.*[~!@#$%^&*()-_=+{};:,<.>]{1,}).{8,}$',
  );

  useEffect(() => {
    if (newPass && newPass === newPassConfirm) {
      const isUpperCase = string => regex.test(string);
      if (isUpperCase(newPass)) {
        setPasswordValidation(true);
      } else setPasswordValidation(false);
    } else setPasswordValidation(false);
  }, [newPass, newPassConfirm]);

  useEffect(() => {
    dispatch(setStep(4));
  }, []);

  useEffect(() => {
    const handleUserRegistration = async () => {
      try {
        const response = await registerUser({
          firstName,
          lastName,
          password,
          customerType,
          userName,
        });
        console.log(response);
        const authResponse = await authUserRequest(password, userName);
        console.log(response);
        const access_token = authResponse.data.accessToken;
        dispatch(updateToken(access_token));
        navigation.navigate('RegistrationScreen4');
      } catch (error) {
        console.log(error);
      }
    };
    if (password && !accessToken) {
      handleUserRegistration();
    }
  }, [password]);

  const handlePasswordConfirm = () => {
    if (accessToken) {
      navigation.navigate('RegistrationScreen4');
    }
    dispatch(setPassword(newPass));
  };
  const infroBoxStyle =
    passwordValidation === ''
      ? styles.infoBox
      : passwordValidation
      ? [styles.infoBox, {backgroundColor: 'rgba(76, 222, 132, 0.3)'}]
      : [styles.infoBox, {backgroundColor: 'rgba(198, 43, 39, 0.15)'}];

  return (
    <View style={styles.setPasswordScreen}>
      <Text style={styles.userTypeHeader}>რეგისტრაცია</Text>
      <Text style={styles.userTypeText}>საკონტაქტო ინფორმაცია</Text>
      <View style={infroBoxStyle}>
        <View style={styles.iconWrapper}>
          <InfoIcon width={18} height={18} fill="black" />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoBoxHeader}>
            ძლიერი პაროლი უნდა იყოს რთულად გამოსაცნობი.
          </Text>
          <Text style={styles.infoBoxText}>
            გამოიყენეთძნელადმისახვედრიდა გამოსაცნობისიტყვები, ფრაზები,
            სიმბოლოები დარიცხვები, არასტანდართული uPPercasing-ი.
          </Text>
        </View>
      </View>
      <PasswordInputs
        setNewPassword={setNewPass}
        setNewPasswordConfirm={setNewPassConfirm}
        newPassword={newPass}
        newPasswordConfirm={newPassConfirm}
      />
      <BaseButton
        isDisabled={!passwordValidation}
        onPress={handlePasswordConfirm}>
        ავტორიზაცია
      </BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  setPasswordScreen: {
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
  infoBox: {
    marginTop: 31,
    width: 345,
    height: 126,
    backgroundColor: 'rgba(111, 133, 226, 0.1)',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
  },
  infoBoxHeader: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
  },
  infoBoxText: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(23, 23, 23, 0.2)',
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    marginLeft: 9,
    height: 95,
    justifyContent: 'space-between',
  },
});
