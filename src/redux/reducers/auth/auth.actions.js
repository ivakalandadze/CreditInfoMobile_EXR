import * as types from './auth.actionTypes';

export const authUser = (accessToken, refreshToken) => {
  return async dispatch => {
    try {
      dispatch({type: types.AUTH_USER, accessToken, refreshToken});
    } catch (error) {
      console.log(error);
    }
  };
};
export const logOutUser = () => {
  return async dispatch => {
    try {
      dispatch({type: types.LOGOUT_USER});
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateToken = accessToken => {
  return async dispatch => {
    try {
      dispatch({type: types.UPDATE_TOKEN, accessToken});
    } catch (error) {
      console.log(error);
    }
  };
};
