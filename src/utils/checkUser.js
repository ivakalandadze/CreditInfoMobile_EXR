import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const SEND_OTP = '/resources/front/passwordrecovery/sendotp';

const checkUser = async username => {
  return axios.post(BASE_URL + SEND_OTP, {
    username,
  });
};

export default checkUser;
