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
    padding: 9,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
