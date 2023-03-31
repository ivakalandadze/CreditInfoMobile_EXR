import * as types from './registration.actionTypes';
import customerType from './registration.reducer';

export const setCustomerType = customerType => {
  return async dispatch => {
    try {
      dispatch({type: types.CHOOSE_CUSTOMER_TYPE, customerType});
    } catch (error) {
      console.log(error);
    }
  };
};
export const setUserName = userName => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_USER_NAME, userName});
    } catch (error) {
      console.log(error);
    }
  };
};
export const setFirstName = firstName => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_FIRST_NAME, firstName});
    } catch (error) {
      console.log(error);
    }
  };
};
export const setLastName = lastName => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_LAST_NAME, lastName});
    } catch (error) {
      console.log(error);
    }
  };
};
export const setPassword = password => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_PASSWORD, password});
    } catch (error) {
      console.log(error);
    }
  };
};
export const setAddress = address => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_ADDRESS, address});
    } catch (error) {
      console.log(error);
    }
  };
};
export const setBirthDate = birthDate => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_BIRTH_DATE, birthDate});
    } catch (error) {
      console.log(error);
    }
  };
};
export const setEmail = email => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_EMAIL, email});
    } catch (error) {
      console.log(error);
    }
  };
};
export const setCountryId = countryId => {
  return async dispatch => {
    try {
      dispatch({type: types.SET_COUNTRY_ID, countryId});
    } catch (error) {
      console.log(error);
    }
  };
};
