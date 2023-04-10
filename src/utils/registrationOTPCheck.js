import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const CHECK_OTP = '/resources/front/customer/checkotp';

const registrationOTPCheck = async (code, accessToken) => {
  return axios.put(
    BASE_URL + CHECK_OTP,
    {code: code},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};

export default registrationOTPCheck;
