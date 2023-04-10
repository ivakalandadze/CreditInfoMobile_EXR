import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const AGREE_AGREEMENT = '/resources/front/customer/agreement';

const agreeOnAgreement = async access_token => {
  return axios.patch(BASE_URL + AGREE_AGREEMENT, null, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default agreeOnAgreement;
