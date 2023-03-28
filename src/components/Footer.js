import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Link from './Link';
import {useNavigation} from '@react-navigation/native';

export default function Footer({children}) {
  return (
    <View style={styles.footerWrapper}>
      <Text style={styles.footerText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerWrapper: {
    width: '100%',
    height: 78,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
  },
});
