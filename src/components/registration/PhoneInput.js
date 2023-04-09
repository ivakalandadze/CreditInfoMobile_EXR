import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import BaseButton from '../BaseButton';

export default function PhoneInput({
  type,
  address,
  setAddress,
  country,
  countryCode,
}) {
  return (
    <View style={styles.OTPadressInputWrapper}>
      <Text style={styles.inputTag}>
        {type === 'phone' ? 'ტელეფონის ნომერი' : 'ელ.ფოსტა'}
      </Text>
      <View style={styles.phoneInputWrapper}>
        <View style={styles.countryCodeWrapper}>
          <Text style={styles.countryCode}>
            {country} {countryCode}
          </Text>
        </View>
        <TextInput
          maxLength={9}
          style={styles.inputStyle}
          value={address}
          onChangeText={setAddress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OTPadressInputWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  inputTag: {
    top: -10,
    left: 15,
    position: 'absolute',
    backgroundColor: 'white',
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    width: 345,
    height: 61,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
  },
  inputStyle: {
    width: 246,
    height: 61,
    paddingLeft: 22,
    paddingTop: 23,
    paddingBottom: 24,
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'left',
  },
  countryCode: {
    textAlign: 'center',
    width: 99,

    color: 'rgba(0, 118, 255, 1)',
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
  },
  countryCodeWrapper: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
  },
});
