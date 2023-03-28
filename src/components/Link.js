import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Link({children, style, onPress}) {
  return (
    <Text style={[styles.linkText, style]} onPress={onPress}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  linkText: {
    color: 'rgba(0, 118, 255, 1)',
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 12.65,
    marginRight: 29,
    alignSelf: 'flex-end',
    marginTop: 9,
  },
});
