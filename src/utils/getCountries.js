import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const GET_COUNTRIES = '​/resources​/front​/country?language=KA';

const getCountries = async () => {
  console.log('getCountries request');
  return axios.get(BASE_URL + GET_COUNTRIES);
};

export default getCountries;
