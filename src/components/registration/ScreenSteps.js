import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Step from './Step';
import {useSelector} from 'react-redux';
import {selectSteps} from '../../redux/reducers/steps/steps.selector';

export default function ScreenSteps() {
  const {step} = useSelector(selectSteps);
  const screenSteps = [];
  for (let i = 0; i < 6; i++) {
    const isChoosen = step === i;
    screenSteps.push(<Step key={i} choosen={isChoosen} />);
  }
  return <View style={styles.screenSteps}>{screenSteps}</View>;
}

const styles = StyleSheet.create({
  screenSteps: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between',
  },
});
