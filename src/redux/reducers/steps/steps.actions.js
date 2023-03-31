import * as types from './steps.actionTypes';

export const setStep = step => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_STEP, step});
    } catch (error) {
      console.log(error);
    }
  };
};
