import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const REGISTER_USER = '/resources/front/register?language=KA';

const registerUser = async userInfo => {
  return axios.post(BASE_URL + REGISTER_USER, userInfo);
};

export default registerUser;
