import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import RootNavigation from './navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {chooseLanguage} from './redux/reducers/language/language.actions';

export default function App() {
  useEffect(() => {
    const hello = AsyncStorage.getItem('language').then(language => {
      if (language) {
        store.dispatch(chooseLanguage(language));
      }
    });
    console.log(hello);
  }, []);

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
