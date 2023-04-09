import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const REFRESH_TOKEN = '/resources/front/auth/refresh';

const refreshTokenRequest = async refreshToken => {
  console.log(refreshToken);
  return axios.post(BASE_URL + REFRESH_TOKEN, {refreshToken});
};

export default refreshTokenRequest;
