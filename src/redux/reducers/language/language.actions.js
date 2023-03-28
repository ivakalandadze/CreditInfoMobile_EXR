import * as types from './language.actionTypes';

export const chooseLanguage = language => {
  return async dispatch => {
    try {
      dispatch({type: types.CHOOSE_LANGUAGE, language});
    } catch (error) {
      console.log(error);
    }
  };
};
