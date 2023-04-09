import * as types from './auth.actionTypes';

const initialState = {
  isAuth: false,
  accessToken: '',
  refreshToken: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        isAuth: true,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case types.UPDATE_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case types.LOGOUT_USER:
      return {
        isAuth: false,
        accessToken: '',
        refreshToken: '',
      };
    default:
      return state;
  }
};

export default auth;
