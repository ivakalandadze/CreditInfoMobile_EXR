import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InfoMessaeIcon from '../../assets/svg/Mask Group 274.svg';

const INFO_MESSAGE_ICON_WIDTH = 15;
const INFO_MESSAGE_ICON_HEIGHT = 15;

export default function InfoMessage({children, style}) {
  return (
    <View style={styles.infoMessageWrapper}>
      <InfoMessaeIcon
        style={styles.infoMessageIcon}
        width={INFO_MESSAGE_ICON_WIDTH}
        height={INFO_MESSAGE_ICON_HEIGHT}
      />
      <Text style={styles.infoText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoMessageWrapper: {
    height: 51,
    width: 345,
    backgroundColor: '#171717',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 11,
  },
  infoMessageIcon: {
    position: 'absolute',
    left: 16,
    bottom: 18,
  },
  infoText: {
    color: 'white',
    width: 286,
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    marginLeft: 39,
  },
});
