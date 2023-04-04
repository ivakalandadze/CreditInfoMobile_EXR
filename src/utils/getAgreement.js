import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const GET_AGREEMENT = '/resources/front/agreement?language=KA';

const getAgreement = async access_token => {
  return axios.get(BASE_URL + GET_AGREEMENT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default getAgreement;
