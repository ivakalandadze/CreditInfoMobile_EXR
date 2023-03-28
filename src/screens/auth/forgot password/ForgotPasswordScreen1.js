import {Modal, StyleSheet, View, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import Footer from '../../../components/Footer';
import ForgotPassIcon from '../../../assets/svg/Group 784.svg';
import UserNameInput from '../../../components/forgot password/UserNameInput';
import BaseButton from '../../../components/BaseButton';
import {useNavigation} from '@react-navigation/native';
import Link from '../../../components/Link';
import InfoMessage from '../../../components/messages/InfoMessage';
import checkUser from '../../../utils/checkUser.js';
import CloseIcon from '../../../assets/svg/Group 7602.svg';
import InfoMessageIcon from '../../../assets/svg/Mask Group 274.svg';
import {Languages} from '../../../language/Languages';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/reducers/language/language.selector';

export default function ForgotPasswordScreen1() {
  const {language} = useSelector(selectLanguage);
  const [user, setUser] = useState('');
  const [infoMessage, setInfoMessage] = useState(false);
  const [worngUser, setWrongUser] = useState(false);
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const FORGOT_PASS_ICON_WIDTH = 215.01;
  const FORGOT_PASS_ICON_HEIGHT = 215.01;
  const CLOSE_ICON_WIDTH = 32;
  const CLOSE_ICON_HEIGHT = 32;
  const INFO_MESSAGE_ICON_WIDTH = 20;
  const INFO_MESSAGE_ICON_HEIGHT = 20;

  const handleUserCheck = async () => {
    try {
      const response = await checkUser(user);
      navigation.navigate('OTPInput', {user: user});
    } catch (error) {
      setWrongUser(true);
      console.log(error);
    }
  };

  const {
    passwordRecovery,
    authorization,
    userInputInfo,
    mistake,
    wrongUserOrPass,
    doYouHaveAnAccount,
  } = Languages[language];

  const handleAuth = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={[styles.forgotPasswordScreen, {marginTop: statusBarHeight}]}>
      <Header />
      <View style={styles.forgotPasswordContent}>
        <ForgotPassIcon
          style={styles.forgotPassIcon}
          width={FORGOT_PASS_ICON_WIDTH}
          height={FORGOT_PASS_ICON_HEIGHT}
        />
        <Text style={styles.authHeader}>{passwordRecovery}</Text>
        <UserNameInput
          setUser={setUser}
          onPress={() => setInfoMessage(!infoMessage)}
        />
        <BaseButton onPress={handleUserCheck}>{authorization}</BaseButton>
      </View>
      {infoMessage && <InfoMessage>{userInputInfo}</InfoMessage>}
      <Modal visible={worngUser} transparent={true} animationType="slide">
        <View style={[styles.modalContainer, {marginTop: statusBarHeight}]}>
          <Pressable
            style={styles.modalCloseButton}
            onPress={() => setWrongUser(false)}>
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
    justifyContent: 'flex-start',
  },
  forgotPassIcon: {
    marginTop: 31.98,
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
  authHeader: {
    marginTop: 18.99,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 22,
  },
});
