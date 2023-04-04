import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setStep} from '../../../redux/reducers/steps/steps.actions';
import {useNavigation} from '@react-navigation/native';
import PersonalInfoInputs from '../../../components/registration/PersonalInfoInputs';
import BaseButton from '../../../components/BaseButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {selectType} from '../../../redux/reducers/registration/registration.selector';

export default function PersonalInfoScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [personalInfo, setPersonalInfo] = useState({});
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  useEffect(() => {
    dispatch(setStep(1));
  }, []);

  const handlePersonalInfoSubmit = () => {
    navigation.navigate('RegistrationScreen2');
  };
  return (
    <View style={[styles.userTypeScreen]}>
      <Text style={styles.userTypeHeader}>რეგისტრაცია</Text>
      <Text style={styles.userTypeText}>პირადი ინფორმაცია</Text>
      <PersonalInfoInputs setReadyToSubmit={setReadyToSubmit} />
      <BaseButton
        isDisabled={!readyToSubmit}
        onPress={handlePersonalInfoSubmit}>
        ავტორიზაცია
      </BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  userTypeScreen: {
    flex: 1,
    alignItems: 'center',
  },
  userTypeHeader: {
    marginTop: 41,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 27,
    textTransform: 'uppercase',
  },
  userTypeText: {
    marginTop: 12,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 16,
  },
  typeButtonsWrapper: {
    marginTop: 22,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  typeBoxText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
});
