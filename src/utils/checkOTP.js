import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const CHECK_OTP = '/resources/front/passwordrecovery/checkotp';

const checkOTP = async (username, code) => {
  return axios.post(BASE_URL + CHECK_OTP, {username: username, code: code});
};

export default checkOTP;
