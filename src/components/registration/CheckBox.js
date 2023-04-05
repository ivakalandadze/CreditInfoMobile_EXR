import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckIcon from '../../assets/svg/Icon ionic-ios-checkmark.svg';

export default function CheckBox({isChecked, setIsChecked}) {
  return (
    <Pressable
      style={
        isChecked
          ? [styles.checkBox, {backgroundColor: 'rgba(198, 198, 198, 1)'}]
          : styles.checkBox
      }
      onPress={() => setIsChecked(!isChecked)}>
      {isChecked && <CheckIcon width={9} height={6.89} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 17,
    height: 17,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(198, 198, 198, 1)',
  },
});
