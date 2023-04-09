import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuth} from '../../redux/reducers/auth/auth.selector';
import jwt_decode from 'jwt-decode';
import {logOutUser, refreshToken} from '../../redux/reducers/auth/auth.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseButton from '../../components/BaseButton';

export default function MainScreen() {
  const {accessToken, refreshToken} = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  useEffect(() => {
    try {
      const decoded = jwt_decode(accessToken);
      setUser(decoded.exp);
    } catch (error) {
      dispatch(refreshToken(refreshToken));
    }
  }, [accessToken]);

  const clearStorage = async () => {
    await AsyncStorage.clear();
  };

  const handleLogOut = () => {
    clearStorage();
    dispatch(logOutUser());
  };
  return (
    <View>
      <Text>{user}</Text>
      <BaseButton onPress={handleLogOut}>Log Out</BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({});
