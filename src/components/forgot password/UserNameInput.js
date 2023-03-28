import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import InfoIcon from '../../assets/svg/Clip path group';
import IconWrapper from '../icon/IconWrapper';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../redux/reducers/language/language.selector';
import {Languages} from '../../language/Languages';

const PASS_ICON_WIDTH = 16;
const PASS_ICON_HEIGHT = 12.8;

export default function SignInInputs({
  setUser,
  onPress,
  disabled,
  text,
  style,
}) {
  const {language} = useSelector(selectLanguage);

  const {user} = Languages[language];
  return (
    <View style={styles.inputsBox}>
      <View style={styles.passwordInput}>
        <TextInput
          keyboardType="numeric"
          editable={!disabled}
          value={text}
          maxLength={11}
          style={[styles.textInput, style]}
          onChangeText={setUser}
          placeholder={user}
          placeholderTextColor={'rgba(0, 0, 0, 1)'}
        />
        {!disabled && (
          <IconWrapper onPress={onPress} style={styles.showIcon}>
            <InfoIcon width={PASS_ICON_WIDTH} height={PASS_ICON_HEIGHT} />
          </IconWrapper>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputsBox: {
    marginTop: 21,
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
