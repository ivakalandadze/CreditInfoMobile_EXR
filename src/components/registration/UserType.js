import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectType} from '../../redux/reducers/registration/registration.selector';
import {setCustomerType} from '../../redux/reducers/registration/registration.actions';
import PersonIcon from '../../assets/svg/Mask Group 186.svg';
import CompanyIcon from '../../assets/svg/29-auction.svg';

export default function UserType({type}) {
  const dispatch = useDispatch();
  const handleTypeSelect = () => {
    console.log(type);
    dispatch(setCustomerType(type));
  };
  const {customerType} = useSelector(selectType);
  const isChoosen = customerType === type;
  const iconColor = isChoosen ? '#34C36B' : 'black';
  return (
    <Pressable
      onPress={handleTypeSelect}
      style={
        isChoosen ? styles.choosenUserTypeWrapper : styles.userTypeWrapper
      }>
      <View
        style={
          customerType === type
            ? [styles.iconWrapper, styles.choosenIconWrapper]
            : styles.iconWrapper
        }>
        {type === 'PERSON' ? (
          <PersonIcon width={24} height={24} fill={iconColor} />
        ) : type === 'COMPANY' ? (
          <CompanyIcon width={24} height={24} fill={iconColor} />
        ) : (
          <></>
        )}
      </View>
      {type === 'PERSON' ? (
        <Text
          style={
            isChoosen
              ? [styles.typeText, styles.choosentypeText]
              : styles.typeText
          }>
          ფიზიკური პირი
        </Text>
      ) : type === 'COMPANY' ? (
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
    height: 152,
    borderWidth: 1,
    borderColor: '#34C36B',
    borderRadius: 15,
    paddingVertical: 31,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 222, 132, 0.1)',
  },
  userTypeWrapper: {
    width: 165,
    height: 152,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 15,
    paddingVertical: 31,
    justifyContent: 'space-between',
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
