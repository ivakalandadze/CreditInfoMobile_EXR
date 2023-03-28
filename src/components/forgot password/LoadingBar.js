import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function LoadingBar({
  duration,
  isTimedOut,
  OTPSent,
  startCountDown,
  setStartCountDown,
}) {
  const [time, setTime] = useState(1);
  const [boxWidth, setBoxWidth] = useState(1);

  useEffect(() => {
    if (!OTPSent) {
      const interval = setInterval(() => {
        if (time === duration + 1) {
          isTimedOut(true);
          setStartCountDown(false);
          return clearInterval(interval);
        }
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setBoxWidth(273 - (273 / 60) * (time - 1));
      return () => clearInterval(interval);
    }
  }, [time]);

  useEffect(() => {
    if (!OTPSent && startCountDown) {
      setTime(1);
    }
  }, [startCountDown]);
  return (
    <View style={styles.loadingBarWrapper}>
      <View style={styles.outerBox}>
        <View style={[styles.innerBox, {width: boxWidth}]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingBarWrapper: {
    marginTop: 12.5,
  },
  outerBox: {
    width: 273,
    height: 12,
    borderRadius: 15,
    backgroundColor: '#F4F4F4',
  },
  innerBox: {
    height: 12,
    borderRadius: 15,
    backgroundColor: 'rgba(198, 43, 39, 1)',
  },
});
