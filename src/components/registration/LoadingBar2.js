import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function LoadingBar2({
  startCountDown,
  setStartCountDown,
  // OTPDuration,
  setOTPTimedOut,
}) {
  const [time, setTime] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const OTPDuration = 5;
  useEffect(() => {
    if (startCountDown) {
      setBoxWidth((273 / 5) * time);
      const interval = setInterval(() => {
        if (time === OTPDuration) {
          setOTPTimedOut(true);
          setStartCountDown(false);
          return clearInterval(interval);
        }
        setTime(prevTime => prevTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startCountDown, time]);

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
