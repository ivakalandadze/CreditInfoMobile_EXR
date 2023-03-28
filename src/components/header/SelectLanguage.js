import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Georgia from '../../assets/svg/Flag_of_Georgia.svg';
import USA from '../../assets/svg/Flag_of_the_United_States.svg';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../redux/reducers/language/language.selector';
import {chooseLanguage} from '../../redux/reducers/language/language.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SelectLanguage() {
  const {language} = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const handleSelect = async lang => {
    await AsyncStorage.setItem('language', lang);
    dispatch(chooseLanguage(lang));
  };

  return (
    <View style={styles.selectLanguageContainer}>
      <Pressable
        style={() => {
          const selected = language === 'GEO';
          return selected
            ? [styles.flagStyle, {borderWidth: 1, borderColor: '#ADD8E6'}]
            : styles.flagStyle;
        }}
        onPress={() => handleSelect('GEO')}>
        <Georgia width={25} height={25} />
      </Pressable>
      <Pressable
        style={() => {
          const selected = language === 'USA';
          return selected
            ? [styles.flagStyle, {borderWidth: 1, borderColor: '#ADD8E6'}]
            : styles.flagStyle;
        }}
        onPress={() => handleSelect('USA')}>
        <USA width={25} height={25} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  selectLanguageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 55,
  },
  flagStyle: {
    borderWidth: 1,
    borderColor: 'white',
  },
});
