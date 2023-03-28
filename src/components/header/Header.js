import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderLogo from '../../assets/svg/logo blc.svg';
import BurgerButton from './BurgerButton';
import SelectLanguage from './SelectLanguage';

const HEADER_LOGO_WIDTH = 165;
const HEADER_LOGO_HEIGHT = 39.02;

export default function Header() {
  return (
    <View style={styles.header}>
      <HeaderLogo width={HEADER_LOGO_WIDTH} height={HEADER_LOGO_HEIGHT} />
      <SelectLanguage />
      <BurgerButton />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
