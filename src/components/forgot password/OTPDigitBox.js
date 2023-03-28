import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';

export default function OTPDigitBox({onChangeText}) {
  const refInput0 = useRef();
  const refInput1 = useRef();
  const refInput2 = useRef();
  const refInput3 = useRef();
  const refInput4 = useRef();
  const refInput5 = useRef();

  return (
    <View style={styles.otpInput}>
      <View style={styles.digitBox}>
        <TextInput
          autoFocus={true}
          onChangeText={digit => {
            refInput1.current.focus();
            onChangeText(0, digit);
          }}
          placeholder={'_'}
          placeholderTextColor={'black'}
          maxLength={1}
          style={styles.digitInput}
          ref={refInput0}
        />
      </View>
      <View style={styles.digitBox}>
        <TextInput
          onChangeText={digit => {
            refInput2.current.focus();
            onChangeText(1, digit);
          }}
          placeholder={'_'}
          placeholderTextColor={'black'}
          maxLength={1}
          style={styles.digitInput}
          ref={refInput1}
        />
      </View>
      <View style={styles.digitBox}>
        <TextInput
          onChangeText={digit => {
            refInput3.current.focus();
            onChangeText(2, digit);
          }}
          placeholder={'_'}
          placeholderTextColor={'black'}
          maxLength={1}
          style={styles.digitInput}
          ref={refInput2}
        />
      </View>
      <View style={styles.digitBox}>
        <TextInput
          onChangeText={digit => {
            refInput4.current.focus();
            onChangeText(3, digit);
          }}
          placeholder={'_'}
          placeholderTextColor={'black'}
          maxLength={1}
          style={styles.digitInput}
          ref={refInput3}
        />
      </View>
      <View style={styles.digitBox}>
        <TextInput
          onChangeText={digit => {
            refInput5.current.focus();
            onChangeText(4, digit);
          }}
          placeholder={'_'}
          placeholderTextColor={'black'}
          maxLength={1}
          style={styles.digitInput}
          ref={refInput4}
        />
      </View>
      <View style={styles.digitBox}>
        <TextInput
          onChangeText={digit => {
            onChangeText(5, digit);
          }}
          placeholder={'_'}
          placeholderTextColor={'black'}
          maxLength={1}
          style={styles.digitInput}
          ref={refInput5}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otpInput: {
    width: 322,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  digitBox: {
    width: 42,
    height: 52,
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 1)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitInput: {
    width: 9,
    height: 18,
  },
});
