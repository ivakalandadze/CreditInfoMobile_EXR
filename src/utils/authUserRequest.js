import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const AUTH_END_POINT = '/resources/front/auth';

export const authUserRequest = async (password, username) => {
  console.log('authRequest sent');
  return axios.post(BASE_URL + AUTH_END_POINT, {
    password,
    username,
  });
};
