import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Step({choosen}) {
  return <View style={choosen ? styles.choosenStep : styles.step}></View>;
}

const styles = StyleSheet.create({
  step: {
    width: 5,
    height: 5,
    borderRadius: 10000,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  choosenStep: {
    width: 15,
    height: 5,
    borderRadius: 1000,
    backgroundColor: '#C62B27',
  },
});
