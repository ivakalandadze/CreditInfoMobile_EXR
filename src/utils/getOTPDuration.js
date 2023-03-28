import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const GET_OTP_DURATION = '/resources/front/passwordrecovery/otpduration';

const getOTPDuration = async () => {
  return axios.get(BASE_URL + GET_OTP_DURATION);
};

export default getOTPDuration;
