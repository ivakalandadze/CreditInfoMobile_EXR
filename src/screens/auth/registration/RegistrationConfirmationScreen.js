import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setStep} from '../../../redux/reducers/steps/steps.actions';
import ConfirmationType from '../../../components/registration/ConfirmationType';
import PhoneInput from '../../../components/registration/PhoneInput';
import EmailInput from '../../../components/registration/EmailInput';
import LoadingBar from '../../../components/forgot password/LoadingBar';
import OTPDigitBox from '../../../components/forgot password/OTPDigitBox';

export default function RegistrationConfirmationScreen() {
  const dispatch = useDispatch();
  const [confirmationType, setConfirmationType] = useState('');
  const [OTPDuration, setOTPDuration] = useState('');
  const [startCountDown, setStartCountDown] = useState(false);

  useEffect(() => {
    dispatch(setStep(5));
  }, []);

  useEffect(() => {
    const setDuration = async () => {
      const duration = await getOTPDuration();
      setOTPDuration(duration.data.seconds);
    };
    setDuration();
  }, []);

  useEffect(() => {
    if (confirmationType) {
      setStartCountDown(true);
    }
  }, [confirmationType]);

  return (
    <View style={styles.registrationConfirmScreen}>
      <Text style={styles.userTypeHeader}>რეგისტრაცია</Text>
      <Text style={styles.userTypeText}>აირჩიეთ დადასტურების მეთოდი</Text>
      <View style={styles.confirmationTypesWrapper}>
        <ConfirmationType
          type="PHONE"
          choosenType={confirmationType}
          setType={setConfirmationType}
        />
        <ConfirmationType
          type="EMAIL"
          choosenType={confirmationType}
          setType={setConfirmationType}
        />
      </View>
      {confirmationType === 'PHONE' && (
        <View>
          <PhoneInput />
          <LoadingBar
            duration={OTPDuration}
            startCountDown={startCountDown}
            setStartCountDown={setStartCountDown}
          />
        </View>
      )}
      {confirmationType === 'EMAIL' && <EmailInput />}
      <OTPDigitBox />
    </View>
  );
}

const styles = StyleSheet.create({
  registrationConfirmScreen: {
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
  confirmationTypesWrapper: {
    marginTop: 22,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
