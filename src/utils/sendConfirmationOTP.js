import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const SEND_OTP = '/resources/front/customer/sendotp';

const sendConfirmationOTP = async (value, type, accessToken) => {
  console.log(BASE_URL + SEND_OTP + `?${type}=${value}`);
  console.log(accessToken);
  return axios.put(
    BASE_URL + SEND_OTP + `?${type}=${value}`,
    null,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};

export default sendConfirmationOTP;
