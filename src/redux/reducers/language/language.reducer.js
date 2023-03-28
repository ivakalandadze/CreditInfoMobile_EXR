import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from './language.actionTypes';

const initialState = {
  language: 'GEO',
};

const changeLanguage = (state = initialState, action) => {
  switch (action.type) {
    case types.CHOOSE_LANGUAGE:
      return {
        language: action.language,
      };
    default:
      return state;
  }
};
export default changeLanguage;
