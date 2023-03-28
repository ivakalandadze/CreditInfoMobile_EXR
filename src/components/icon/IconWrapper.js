import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function IconWrapper({children, style, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iconWrapper, style]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: 31,
    height: 31,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
