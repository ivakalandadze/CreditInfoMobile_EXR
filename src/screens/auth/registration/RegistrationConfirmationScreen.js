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
import {selectAuth} from '../../../redux/reducers/auth/auth.selector';
import registrationOTPCheck from '../../../utils/registrationOTPCheck';
import {useNavigation} from '@react-navigation/native';
import {setCustomerType} from '../../../redux/reducers/registration/registration.actions';
import refreshTokenRequest from '../../../utils/refreshTokenRequest';
import {updateToken} from '../../../redux/reducers/auth/auth.actions';

export default function RegistrationConfirmationScreen() {
  const dispatch = useDispatch();
  const [confirmationType, setConfirmationType] = useState('');
  const [OTPDuration, setOTPDuration] = useState('');
  const [startCountDown, setStartCountDown] = useState(false);
  const [OTPTimedOut, setOTPTimedOut] = useState(false);
  const [confirmationAddress, setConfirmationAddress] = useState('');
  const [OTPCode, setOTPCode] = useState({});
  const {accessToken, refreshToken} = useSelector(selectAuth);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(setStep(5));
  }, []);

  const handleOTPInput = (index, digit) => {
    setOTPCode(prevCode => ({
      ...prevCode,
      [index]: digit,
    }));
  };

  useEffect(() => {}, [accessToken, refreshToken]);

  const handleSendOTP = async () => {
    try {
      const resp = await sendConfirmationOTP(
        confirmationAddress,
        confirmationType,
        accessToken,
      );
      setOTPDuration(60);
      setStartCountDown(true);
    } catch (error) {
      if (error.response.status === 401) {
        try {
          const refreshResp = await refreshTokenRequest(
            accessToken,
            refreshToken,
          );
          dispatch(
            updateToken(
              refreshResp.data.accessToken,
              refreshResp.data.refreshToken,
            ),
          );

          const resp = await sendConfirmationOTP(
            confirmationAddress,
            confirmationType,
            accessToken,
          );
          setOTPDuration(60);
          setStartCountDown(true);
        } catch (error1) {
          console.log(error1);
        }
      } else console.log(error);
    }
  };

  const handleOTPCheck = async () => {
    const code = Object.values(OTPCode).join('');
    try {
      const resp = await registrationOTPCheck(code, accessToken);
      setStartCountDown(false);
      dispatch(setCustomerType(''));
      navigation.navigate('LogIn', {registrationDone: true});
    } catch (error) {
      if (error.response.status === 401) {
        const refreshResp = await refreshTokenRequest(refreshToken);
        dispatch(
          updateToken(
            refreshResp.data.accessToken,
            refreshResp.data.refreshToken,
          ),
        );
        const resp = await registrationOTPCheck(code, accessToken);
        setStartCountDown(false);
        dispatch(setCustomerType(''));
        navigation.navigate('LogIn', {registrationDone: true});
      } else console.log(error);
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
          <LoadingBar2
            setOTPTimedOut={setOTPTimedOut}
            OTPDuration={OTPDuration}
            startCountDown={startCountDown}
            setStartCountDown={setStartCountDown}
          />
          <BaseButton
            isDisabled={!OTPTimedOut && OTPDuration}
            onPress={handleSendOTP}
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
            {!OTPDuration ? (
              <Text>'გაგზავნა'</Text>
            ) : (
              <Text>'ხელახლა გაგზავნა'</Text>
            )}
          </BaseButton>
        </View>
      )}
      {confirmationType === 'EMAIL' && <EmailInput />}
      <OTPDigitBox onChangeText={handleOTPInput} />
      <BaseButton onPress={handleOTPCheck}>ავტორიზაცია</BaseButton>
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
