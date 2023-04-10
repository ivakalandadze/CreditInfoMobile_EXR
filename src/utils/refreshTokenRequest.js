import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const REFRESH_TOKEN = '/resources/front/auth/refresh';

const refreshTokenRequest = async (accessToken, refreshToken) => {
  return axios.post(
    BASE_URL + REFRESH_TOKEN,
    {refreshToken},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};

export default refreshTokenRequest;
