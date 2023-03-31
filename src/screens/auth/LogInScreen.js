import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/header/Header';
import AuthIcon from '../../assets/svg/1.svg';
import SignInInputs from '../../components/sign in/SignInInputs';
import Link from '../../components/Link';
import BaseButton from '../../components/BaseButton';
import Footer from '../../components/Footer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {authUserRequest} from '../../utils/authUserRequest';
import {authUser} from '../../redux/reducers/auth/auth.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CloseIcon from '../../assets/svg/Group 7602.svg';
import InfoMessageIcon from '../../assets/svg/Mask Group 274.svg';
import {Languages} from '../../language/Languages';
import {selectLanguage} from '../../redux/reducers/language/language.selector';

const AUTH_ICON_WIDTH = 175;
const AUTH_ICON_HEIGHT = 202.72;
const CLOSE_ICON_WIDTH = 32;
const CLOSE_ICON_HEIGHT = 32;
const INFO_MESSAGE_ICON_WIDTH = 20;
const INFO_MESSAGE_ICON_HEIGHT = 20;

export default function LogInScreen({navigation, route}) {
  const dispatch = useDispatch();

  const {language} = useSelector(selectLanguage);
  const [passwordReset, setPasswordReset] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [words, setWords] = useState({});

  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const {
    welcome,
    authorization,
    didYouForgetPassword,
    registration,
    mistake,
    wrongUserOrPass,
    youDontHaveAnAccount,
    message,
  } = Languages[language];

  useEffect(() => {
    if (route.params) {
      setPasswordReset(route.params.passwordReset);
    }
  }, [route.params]);

  useEffect(() => {
    const checkForUser = async () => {
      try {
        const userAccessToken = await AsyncStorage.getItem('accessToken');
        const userRefreshToken = await AsyncStorage.getItem('refreshToken');
        if (userAccessToken && userRefreshToken) {
          dispatch(authUser(userAccessToken, userRefreshToken));
        }
      } catch (error) {}
    };
    checkForUser();
  }, []);

  const handleSignIn = async () => {
    try {
      const response = await authUserRequest(password, userName);
      console.log(response);
      dispatch(authUser(response.data.accessToken, response.data.refreshToken));
      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
    } catch (error) {
      if (error.response.status === 401) {
        console.log(error.response);
        setWrongCredentials(true);
      } else {
        console.log(error);
      }
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const handleRegistration = () => {
    navigation.navigate('Registration');
  };
  return (
    <>
      <View style={[styles.authScreen, {marginTop: statusBarHeight}]}>
        <Header />
        <View style={styles.authScreenContent}>
          <AuthIcon
            style={styles.authIcon}
            width={AUTH_ICON_WIDTH}
            height={AUTH_ICON_HEIGHT}
          />
          <Text style={styles.authHeader}>{welcome}</Text>
          <SignInInputs setUserName={setUserName} setPassword={setPassword} />
          <Link onPress={handleForgotPassword}>{didYouForgetPassword}</Link>
          <BaseButton onPress={handleSignIn}>{authorization}</BaseButton>
        </View>
        <Modal visible={passwordReset} transparent={true} animationType="slide">
          <View style={[styles.modalContainer1, {marginTop: statusBarHeight}]}>
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setPasswordReset(false)}>
              <CloseIcon width={CLOSE_ICON_WIDTH} height={CLOSE_ICON_HEIGHT} />
            </Pressable>
            <InfoMessageIcon
              width={INFO_MESSAGE_ICON_WIDTH}
              height={INFO_MESSAGE_ICON_HEIGHT}
            />
            <View style={styles.warningTextBox}>
              <Text style={styles.warningHeader}>{message}</Text>
              <Text style={styles.warningText}>
                პაროლი წარმატებით განახლდა{' '}
              </Text>
            </View>
          </View>
        </Modal>
        <Modal
          visible={wrongCredentials}
          transparent={true}
          animationType="slide">
          <View style={[styles.modalContainer2, {marginTop: statusBarHeight}]}>
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setWrongCredentials(false)}>
              <CloseIcon width={CLOSE_ICON_WIDTH} height={CLOSE_ICON_HEIGHT} />
            </Pressable>
            <InfoMessageIcon
              width={INFO_MESSAGE_ICON_WIDTH}
              height={INFO_MESSAGE_ICON_HEIGHT}
            />
            <View style={styles.warningTextBox}>
              <Text style={styles.warningHeader}>{mistake}</Text>
              <Text style={styles.warningText}>{wrongUserOrPass}</Text>
            </View>
          </View>
        </Modal>
        <Footer>
          {youDontHaveAnAccount}
          <Link onPress={handleRegistration}>{registration}</Link>
        </Footer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  authScreen: {
    flex: 1,
  },
  authScreenContent: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  authIcon: {
    marginTop: 38.26,
  },
  authHeader: {
    marginTop: 25,
    fontFamily: 'Helvetica Neue',
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
  },
  modalContainer1: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    width: '95%',
    height: 92,
    backgroundColor: 'rgba(76, 222, 132, 1);',
    borderRadius: 15,
    position: 'relative',
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 15,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  warningTextBox: {
    marginLeft: 23.75,
    maxWidth: '80%',
    height: 50,
    justifyContent: 'space-between',
  },
  warningHeader: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: 'white',
  },
  warningText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: 'white',
  },
  modalContainer2: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    width: '95%',
    height: 92,
    backgroundColor: '#EF2E2E',
    borderRadius: 15,
    position: 'relative',
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 15,
  },
});
