import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackButtonIcon from '../assets/svg/Icon ionic-ios-arrow-back.svg';
import {useNavigation} from '@react-navigation/native';

export default function BackButton({destination}) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.buttonStyle}
      onPress={() => navigation.navigate(destination)}>
      <BackButtonIcon width={25} height={25} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    top: 45,
    left: 12,
  },
});
