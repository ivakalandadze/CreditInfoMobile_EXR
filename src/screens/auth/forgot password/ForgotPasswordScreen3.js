import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../../components/header/Header';
import Footer from '../../../components/Footer';
import ForgotPassIcon from '../../../assets/svg/Group 784.svg';
import ForgotPasswordInputs from '../../../components/forgot password/ForgotPasswordInputs';
import BaseButton from '../../../components/BaseButton';
import changePassword from '../../../utils/changePassword';
import {useNavigation} from '@react-navigation/native';
import CloseIcon from '../../../assets/svg/Group 7602.svg';
import InfoMessageIcon from '../../../assets/svg/Mask Group 274.svg';
import BackButton from '../../../components/BackButton';
import Link from '../../../components/Link';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/reducers/language/language.selector';
import {Languages} from '../../../language/Languages';

const CLOSE_ICON_WIDTH = 32;
const CLOSE_ICON_HEIGHT = 32;
const INFO_MESSAGE_ICON_WIDTH = 20;
const INFO_MESSAGE_ICON_HEIGHT = 20;
const FORGOT_PASS_ICON_WIDTH = 215.01;
const FORGOT_PASS_ICON_HEIGHT = 215.01;

export default function ForgotPasswordScreen3({route}) {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const {user} = route.params;
  const {language} = useSelector(selectLanguage);
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const {
    passwordRecovery,
    newPass,
    confirmPass,
    authorization,
    doYouHaveAnAccount,
    mistake,
    passDontMatch,
  } = Languages[language];

  const handlePasswordChange = async () => {
    try {
      if (newPassword === newPasswordConfirm) {
        const response = await changePassword(user, newPassword);
        navigation.navigate('LogIn', {passwordReset: true});
      } else {
        setPasswordsDontMatch(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAuth = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={[styles.forgotPasswordScreen, {marginTop: statusBarHeight}]}>
      <Header />
      <BackButton destination="UserInput" />
      <View style={styles.forgotPasswordContent}>
        <ForgotPassIcon
          style={styles.forgotPassIcon}
          width={FORGOT_PASS_ICON_WIDTH}
          height={FORGOT_PASS_ICON_HEIGHT}
        />
        <Text style={styles.authHeader}>{passwordRecovery}</Text>
        <ForgotPasswordInputs
          setNewPassword={setNewPassword}
          setNewPasswordConfirm={setNewPasswordConfirm}
        />
        <BaseButton onPress={handlePasswordChange}>{authorization}</BaseButton>
      </View>
      <Modal
        visible={passwordsDontMatch}
        transparent={true}
        animationType="slide">
        <View style={[styles.modalContainer, {marginTop: statusBarHeight}]}>
          <Pressable
            style={styles.modalCloseButton}
            onPress={() => setPasswordsDontMatch(false)}>
            <CloseIcon width={CLOSE_ICON_WIDTH} height={CLOSE_ICON_HEIGHT} />
          </Pressable>
          <InfoMessageIcon
            width={INFO_MESSAGE_ICON_WIDTH}
            height={INFO_MESSAGE_ICON_HEIGHT}
          />
          <View style={styles.warningTextBox}>
            <Text style={styles.warningHeader}>{mistake}</Text>
            <Text style={styles.warningText}>{passDontMatch}</Text>
          </View>
        </View>
      </Modal>
      <Footer>
        {doYouHaveAnAccount} <Link onPress={handleAuth}>{authorization}</Link>
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
  },
  forgotPassIcon: {
    marginTop: 31.98,
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
