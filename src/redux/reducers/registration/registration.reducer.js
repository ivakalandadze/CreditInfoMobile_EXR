import * as types from './registration.actionTypes';

const initialState = {
  customerType: '',
  firstName: '',
  lastName: '',
  password: '',
  userName: '',
  address: '',
  birthDate: new Date(),
  email: '',
  countryId: 0,
};

const customerType = (state = initialState, action) => {
  switch (action.type) {
    case types.CHOOSE_CUSTOMER_TYPE:
      return {
        ...state,
        customerType: action.customerType,
      };
    case types.SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName,
      };
    case types.SET_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName,
      };
    case types.SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    case types.SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case types.SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case types.SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case types.SET_BIRTH_DATE:
      return {
        ...state,
        birthDate: action.birthDate,
      };
    case types.SET_COUNTRY_ID:
      return {
        ...state,
        countryId: action.countryId,
      };

    default:
      return state;
  }
};
export default customerType;
