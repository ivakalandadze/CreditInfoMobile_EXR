import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setStep} from '../../../redux/reducers/steps/steps.actions';
import ConfirmationType from '../../../components/registration/ConfirmationType';
import PhoneInput from '../../../components/registration/PhoneInput';
import EmailInput from '../../../components/registration/EmailInput';
import LoadingBar2 from '../../../components/registration/LoadingBar2';
import OTPDigitBox from '../../../components/forgot password/OTPDigitBox';
import BaseButton from '../../../components/BaseButton';
import sendConfirmationOTP from '../../../utils/sendConfirmationOTP';
import getOTPDuration from '../../../utils/getOTPDuration';
import {selectAuth} from '../../../redux/reducers/auth/auth.selector';

export default function RegistrationConfirmationScreen() {
  const dispatch = useDispatch();
  const [confirmationType, setConfirmationType] = useState('');
  const [OTPDuration, setOTPDuration] = useState('');
  const [startCountDown, setStartCountDown] = useState(false);
  const [OTPTimedOut, setOTPTimedOut] = useState(false);
  const [confirmationAddress, setConfirmationAddress] = useState('');
  const {accessToken} = useSelector(selectAuth);

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

  const handleOTPResend = () => {};

  const handleSendOTP = async () => {
    try {
      const resp = await sendConfirmationOTP(
        confirmationAddress,
        confirmationType,
        accessToken,
      );
      setStartCountDown(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.registrationConfirmScreen}>
      <Text style={styles.userTypeHeader}>რეგისტრაცია</Text>
      <Text sty le={styles.userTypeText}>
        აირჩიეთ დადასტურების მეთოდი
      </Text>
      <View style={styles.confirmationTypesWrapper}>
        <ConfirmationType
          type="phone"
          choosenType={confirmationType}
          setType={setConfirmationType}
        />
        <ConfirmationType
          type="email"
          choosenType={confirmationType}
          setType={setConfirmationType}
        />
      </View>
      {confirmationType === 'phone' && (
        <View style={styles.OTPCheckWrapper}>
          <PhoneInput
            country={'GE'}
            countryCode={'+995'}
            setStartCountDown={setStartCountDown}
            type={confirmationType}
            address={confirmationAddress}
            setAddress={setConfirmationAddress}
          />
          <BaseButton onPress={handleSendOTP}>გაგზავნა</BaseButton>
          <LoadingBar2
            setOTPTimedOut={setOTPTimedOut}
            OTPduration={OTPDuration}
            startCountDown={startCountDown}
            setStartCountDown={setStartCountDown}
          />
          <BaseButton
            isDisabled={!OTPTimedOut}
            onPress={handleOTPResend}
            buttonStyle={{
              width: 274,
              height: 42,
              backgroundColor: 'background: rgba(23, 23, 23, 0.1);',
            }}
            textStyle={{
              fontFamily: 'Helvetica Neue',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 12,
              lineHeight: 15,
              color: 'rgba(10, 26, 38, 1)',
            }}>
            ხელახლა გაგზვანა
          </BaseButton>
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
  OTPCheckWrapper: {
    marginTop: 22,
    alignItems: 'center',
  },
});
