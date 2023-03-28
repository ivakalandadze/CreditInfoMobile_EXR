import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function BaseButton({
  children,
  buttonStyle,
  textStyle,
  onPress,
  isDisabled,
}) {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.buttonStyles, buttonStyle, isDisabled && {opacity: 0.1}]}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyles: {
    width: 345,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(198, 43, 39, 0.2)',
    color: 'rgba(198, 43, 39, 1)',
    borderRadius: 15,
    marginTop: 22,
  },
  buttonText: {
    color: 'rgba(198, 43, 39, 1)',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
});
