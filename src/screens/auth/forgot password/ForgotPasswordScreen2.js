import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Link from '../../../components/Link';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Footer from '../../../components/Footer';
import Header from '../../../components/header/Header';
import BaseButton from '../../../components/BaseButton';
import LoadingBar from '../../../components/forgot password/LoadingBar';
import OTPDigitBox from '../../../components/forgot password/OTPDigitBox';
import UserNameInput from '../../../components/forgot password/UserNameInput';

import ForgotPassIcon from '../../../assets/svg/Group 784.svg';
import getOTPDuration from '../../../utils/getOTPDuration';
import checkUser from '../../../utils/checkUser';
import checkOTP from '../../../utils/checkOTP';
import CloseIcon from '../../../assets/svg/Group 7602.svg';
import InfoMessageIcon from '../../../assets/svg/Mask Group 274.svg';
import BackButton from '../../../components/BackButton';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/reducers/language/language.selector';
import {Languages} from '../../../language/Languages';

const CLOSE_ICON_WIDTH = 32;
const CLOSE_ICON_HEIGHT = 32;
const INFO_MESSAGE_ICON_WIDTH = 20;
const INFO_MESSAGE_ICON_HEIGHT = 20;

export default function ForgotPasswordScreen2({route}) {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [OTPDuration, setOTPDuration] = useState('');
  const [OTPCode, setOTPCode] = useState({});
  const [OTPTimedOut, setOTPTimedOut] = useState(false);
  const [OTPSent, setOTPSent] = useState(false);
  const [startCountDown, setStartCountDown] = useState(false);
  const [wrongOTP, setWrongOTP] = useState(false);
  const {user} = route.params;
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const navigation = useNavigation();
  const {language} = useSelector(selectLanguage);

  const {
    passwordRecovery,
    enterOTP,
    sendOTPAgain,
    authorization,
    mistake,
    OTPisWrong,
    doYouHaveAnAccount,
  } = Languages[language];

  useEffect(() => {
    const setDuration = async () => {
      const duration = await getOTPDuration();
      setOTPDuration(duration.data.seconds);
    };
    setDuration();
  }, []);

  const handleAuth = () => {
    navigation.navigate('LogIn');
  };
  const handleOTPInput = (index, digit) => {
    setOTPCode(prevCode => ({
      ...prevCode,
      [index]: digit,
    }));
  };

  const handleOTPResend = () => {
    checkUser(user);
    setStartCountDown(true);
    setOTPTimedOut(false);
  };

  const handleOTPCheck = async () => {
    const code = Object.values(OTPCode).join('');
    console.log(code);
    try {
      const response = await checkOTP(user, code);
      setOTPSent(true);
      navigation.navigate('NewPassword', {user});
    } catch (error) {
      if (error.response.status === 403) {
        setWrongOTP(true);
      }
      console.log(error);
    }
  };

  const FORGOT_PASS_ICON_WIDTH = 215.01;
  const FORGOT_PASS_ICON_HEIGHT = 215.01;
  return (
    <View style={[styles.forgotPasswordScreen, {marginTop: statusBarHeight}]}>
      <Header />
      <BackButton destination={'UserInput'} />
      <View style={styles.forgotPasswordContent}>
        <ForgotPassIcon
          style={styles.forgotPassIcon}
          width={FORGOT_PASS_ICON_WIDTH}
          height={FORGOT_PASS_ICON_HEIGHT}
        />
        <Text style={styles.authHeader}>{passwordRecovery}</Text>
        <UserNameInput
          style={{backgroundColor: 'rgba(201,201,201, 0.2)'}}
          disabled={true}
          text={user}
          setNewPassword={setNewPassword}
          setNewPasswordConfirm={setNewPasswordConfirm}
        />
        <LoadingBar
          OTPSent={OTPSent}
          duration={OTPDuration}
          startCountDown={startCountDown}
          setStartCountDown={setStartCountDown}
          isTimedOut={setOTPTimedOut}
        />
        <Text style={styles.codeText}>{enterOTP}</Text>
        <OTPDigitBox onChangeText={handleOTPInput} />
        <BaseButton
          isDisabled={!OTPTimedOut}
          onPress={handleOTPResend}
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
          {sendOTPAgain}
        </BaseButton>
        <BaseButton onPress={handleOTPCheck}>{authorization}</BaseButton>
        <Modal visible={wrongOTP} transparent={true} animationType="slide">
          <View style={[styles.modalContainer, {marginTop: statusBarHeight}]}>
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setWrongOTP(false)}>
              <CloseIcon width={CLOSE_ICON_WIDTH} height={CLOSE_ICON_HEIGHT} />
            </Pressable>
            <InfoMessageIcon
              width={INFO_MESSAGE_ICON_WIDTH}
              height={INFO_MESSAGE_ICON_HEIGHT}
            />
            <View style={styles.warningTextBox}>
              <Text style={styles.warningHeader}>{mistake}</Text>
              <Text style={styles.warningText}>{OTPisWrong}</Text>
            </View>
          </View>
        </Modal>
      </View>
      <Footer>
        {doYouHaveAnAccount}
        <Link onPress={handleAuth}>{authorization}</Link>
      </Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  forgotPasswordScreen: {
    alignItems: 'center',
    flex: 1,
  },
  forgotPasswordContent: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  forgotPassIcon: {
    marginTop: 31.98,
  },
  codeText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 7,
  },
  authHeader: {
    marginTop: 18.99,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 22,
  },
  modalContainer: {
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
});
