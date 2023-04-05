import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectType} from '../../redux/reducers/registration/registration.selector';
import {setCustomerType} from '../../redux/reducers/registration/registration.actions';
import PersonIcon from '../../assets/svg/Mask Group 186.svg';
import CompanyIcon from '../../assets/svg/29-auction.svg';
import PhoneIcon from '../../assets/svg/Clip path group (1).svg';
import EmailIcon from '../../assets/svg/Clip path group (2).svg';

export default function ConfirmationType({type, choosenType, setType}) {
  const dispatch = useDispatch();
  const handleTypeSelect = () => {
    console.log(type);
    setType(type);
  };
  const {customerType} = useSelector(selectType);
  const isChoosen = choosenType === type;
  const iconColor = isChoosen ? '#34C36B' : 'black';
  return (
    <Pressable
      onPress={handleTypeSelect}
      style={
        isChoosen ? styles.choosenUserTypeWrapper : styles.userTypeWrapper
      }>
      <View
        style={
          choosenType === type
            ? [styles.iconWrapper, styles.choosenIconWrapper]
            : styles.iconWrapper
        }>
        {type === 'PHONE' ? (
          <PhoneIcon width={19} height={19} fill={iconColor} />
        ) : type === 'EMAIL' ? (
          <EmailIcon width={19} height={19} fill={iconColor} />
        ) : (
          <></>
        )}
      </View>
      {type === 'PHONE' ? (
        <Text
          style={
            isChoosen
              ? [styles.typeText, styles.choosentypeText]
              : styles.typeText
          }>
          ფიზიკური პირი
        </Text>
      ) : type === 'EMAIL' ? (
        <Text
          style={
            isChoosen
              ? [styles.typeText, styles.choosentypeText]
              : styles.typeText
          }>
          იურიდიული პირი
        </Text>
      ) : (
        <></>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  choosenUserTypeWrapper: {
    width: 165,
    height: 91,
    borderWidth: 1,
    borderColor: '#34C36B',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 222, 132, 0.1)',
  },
  userTypeWrapper: {
    width: 165,
    height: 91,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 9,
    backgroundColor: 'rgba(0,0,0, 0.05)',
    borderRadius: 15,
  },
  choosenIconWrapper: {
    backgroundColor: 'rgba(76, 222, 132, 0.3)',
  },
  typeText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
  choosentypeText: {
    color: 'rgba(76, 222, 132, 1)',
  },
});
