import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setStep} from '../../../redux/reducers/steps/steps.actions';
import RNPickerSelect from 'react-native-picker-select';
import SelectIcon from '../../../assets/svg/Icon ionic-ios-arrow-down.svg';
import {
  setAddress,
  setBirthDate,
  setCountryId,
  setEmail,
} from '../../../redux/reducers/registration/registration.actions';
import {selectType} from '../../../redux/reducers/registration/registration.selector';
import BaseButton from '../../../components/BaseButton';
import {useNavigation} from '@react-navigation/native';

export default function ContactInfoScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {birthDate, countryId, email, address} = useSelector(selectType);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  useEffect(() => {
    dispatch(setStep(2));
  }, []);

  const handleBirthDateInput = birthDate => {
    dispatch(setBirthDate(birthDate));
  };
  const handleCountryIdInput = countryId => {
    dispatch(setCountryId(countryId));
  };
  const handleAddressInput = address => {
    dispatch(setAddress(address));
  };
  const handleEmailInput = email => {
    dispatch(setEmail(email));
  };

  useEffect(() => {
    if (birthDate && countryId && email && address) {
      setReadyToSubmit(true);
    } else {
      setReadyToSubmit(false);
    }
  }, [birthDate, countryId, email, address]);
  return (
    <View style={styles.contactInfoScreen}>
      <Text style={styles.userTypeHeader}>რეგისტრაცია</Text>
      <Text style={styles.userTypeText}>საკონტაქტო ინფორმაცია</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.selectInput}>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={birthDate => handleBirthDateInput(birthDate)}
            placeholder={{
              label: 'დაბადების თარიღი',
              value: null,
            }}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
            ]}
          />
          <SelectIcon style={styles.selectIcon} width={10} height={10} />
        </View>
        <View style={styles.selectInput}>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={countryId => handleCountryIdInput(countryId)}
            placeholder={{
              label: 'აირჩიეთ ქვეყანა',
              value: null,
            }}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
            ]}
          />
          <SelectIcon style={styles.selectIcon} width={10} height={10} />
        </View>
        <TextInput
          value={address}
          style={styles.inputBox}
          placeholder="შეიყვანეთ მისამართი"
          onChangeText={handleAddressInput}
        />
        <TextInput
          value={email}
          style={styles.inputBox}
          placeholder="შეიყვანეთ ელ.ფოსტა"
          onChangeText={handleEmailInput}
        />
      </View>
      <BaseButton
        isDisabled={!readyToSubmit}
        onPress={() => navigation.navigate('RegistrationScreen3')}>
        ავტორიზაცია
      </BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  contactInfoScreen: {
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
  inputsContainer: {
    marginTop: 37,
    height: 273,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectInput: {
    alignItems: 'center',
    width: 345,
    position: 'relative',
  },
  selectIcon: {
    position: 'absolute',
    top: 28,
    right: 23,
  },
  inputBox: {
    width: 345,
    height: 61,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderRadius: 20,
    padding: 23,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    alignSelf: 'center',
    width: '100%',
    height: 61,
    fontSize: 16,
    padding: 23,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderRadius: 20,
    color: 'black',
    paddingRight: 40, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    padding: 23,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
