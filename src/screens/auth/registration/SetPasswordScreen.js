import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setStep} from '../../../redux/reducers/steps/steps.actions';

export default function SetPasswordScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStep(2));
  }, []);
  return (
    <View>
      <Text>setPassword</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
