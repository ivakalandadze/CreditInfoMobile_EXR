import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/svg/Icon ionic-ios-arrow-back.svg';
import ScreenSteps from './ScreenSteps';
import {useDispatch, useSelector} from 'react-redux';
import {selectSteps} from '../../redux/reducers/steps/steps.selector';
import {setStep} from '../../redux/reducers/steps/steps.actions';

export default function RegistrationFooter() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {step} = useSelector(selectSteps);
  const handleGoBack = () => {
    dispatch(setStep(step - 1));
    step === 0
      ? navigation.goBack()
      : navigation.navigate(`RegistrationScreen${step - 1}`);
  };
  return (
    <View style={styles.registraionFooter}>
      <Pressable style={styles.backButton} onPress={handleGoBack}>
        <BackIcon width={10} height={10} stroke={'gray'} />
        <Text style={styles.backButtonText}>უკან დაბრუნება</Text>
      </Pressable>
      <ScreenSteps />
    </View>
  );
}

const styles = StyleSheet.create({
  registraionFooter: {
    width: '100%',
    height: 78,
    backgroundColor: 'rgba(244, 244, 244, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingHorizontal: 15,
  },
  backButton: {
    width: 123,
    height: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButtonText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: 'gray',
  },
});
