import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setFirstName,
  setUserName,
  setLastName,
} from '../../redux/reducers/registration/registration.actions';
import {selectType} from '../../redux/reducers/registration/registration.selector';

export default function PersonalInfoInputs({setReadyToSubmit}) {
  const dispatch = useDispatch();
  const {firstName, lastName, customerType, userName} = useSelector(selectType);
  const [usernameConfirm, setUsernameConfirm] = useState(userName);
  const [userNameCheck, setuserNameCheck] = useState(userName);
  const [userNamesMatch, setUserNamesMatch] = useState(false);

  useEffect(() => {
    if (userNameCheck === usernameConfirm) {
      dispatch(setUserName(userNameCheck));
      setUserNamesMatch(true);
      if (firstName && lastName) {
        setReadyToSubmit(true);
      } else {
        setReadyToSubmit(false);
      }
    } else {
      setReadyToSubmit(false);
      setUserNamesMatch(false);
    }
  }, [usernameConfirm, userNameCheck, firstName, lastName]);

  const handleFirstNameInput = firstName => {
    dispatch(setFirstName(firstName));
  };
  const handleLastNameInput = lastName => {
    dispatch(setLastName(lastName));
  };

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        value={userNameCheck}
        style={styles.inputStyle}
        placeholder="პირადი ნომერი"
        onChangeText={setuserNameCheck}
        maxLength={11}
        keyboardType={'number-pad'}
      />
      <View style={styles.confirmWrapper}>
        <TextInput
          value={usernameConfirm}
          style={
            userNamesMatch
              ? styles.inputStyle
              : [styles.inputStyle, styles.warningInput]
          }
          placeholder="გაიმეორეთ პირადი ნომერი"
          onChangeText={setUsernameConfirm}
          maxLength={11}
          keyboardType={'number-pad'}
        />
        {!userNamesMatch && (
          <Text style={styles.requiredText}>აუცილებელი ველი</Text>
        )}
      </View>
      <TextInput
        value={firstName}
        style={styles.inputStyle}
        placeholder="სახელი"
        onChangeText={handleFirstNameInput}
      />
      <TextInput
        value={lastName}
        style={styles.inputStyle}
        placeholder="გვარი"
        onChangeText={handleLastNameInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    marginTop: 21,
    height: 302,
    justifyContent: 'space-between',
  },
  inputStyle: {
    width: 345,
    height: 61,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: 22,
  },
  warningInput: {
    borderColor: 'rgba(198, 43, 39, 0.3)',
  },
  requiredText: {
    position: 'absolute',
    bottom: 7,
    right: 7,
    alignSelf: 'flex-end',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 13,
    color: '#C62B27',
  },
  confirmWrapper: {
    position: 'relative',
  },
});
