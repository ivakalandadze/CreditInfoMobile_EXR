import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import PassShowIcon from '../../assets/svg/Icon awesome-eye-slash.svg';
import PassHideIcon from '../../assets/svg/Icon awesome-eye.svg';
import IconWrapper from '../icon/IconWrapper';
import {Languages} from '../../language/Languages';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../redux/reducers/language/language.selector';

const PASS_ICON_WIDTH = 16;
const PASS_ICON_HEIGHT = 12.8;

export default function SignInInputs({setPassword, setUserName}) {
  const {language} = useSelector(selectLanguage);
  const [showPassword, setShowPassword] = useState(true);

  const {user, pass} = Languages[language];

  const handleShowPassword = () => {
    setShowPassword(prevStatus => !prevStatus);
  };
  return (
    <View style={styles.inputsBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={setUserName}
        placeholder={user}
        placeholderTextColor={'rgba(0, 0, 0, 1)'}
        keyboardType="numeric"
      />
      <View style={styles.passwordInput}>
        <TextInput
          secureTextEntry={showPassword}
          style={styles.textInput}
          onChangeText={setPassword}
          placeholder={pass}
          placeholderTextColor={'rgba(0, 0, 0, 1)'}
        />
        <IconWrapper onPress={handleShowPassword} style={styles.showIcon}>
          {showPassword ? (
            <PassShowIcon width={PASS_ICON_WIDTH} height={PASS_ICON_HEIGHT} />
          ) : (
            <PassHideIcon width={PASS_ICON_WIDTH} height={PASS_ICON_HEIGHT} />
          )}
        </IconWrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputsBox: {
    marginTop: 50,
    height: 154,
    justifyContent: 'space-between',
  },
  textInput: {
    width: 345,
    height: 61,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 20,
    paddingLeft: 22,
    paddingTop: 23,
    paddingBottom: 24,
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
  },
  passwordInput: {
    position: 'relative',
  },
  showIcon: {
    position: 'absolute',
    right: 15,
    top: 14.5,
    backgroundColor: 'rgba(147, 147, 147, 0.1)',
  },
});
