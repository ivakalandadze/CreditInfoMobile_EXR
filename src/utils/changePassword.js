import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const CHANGE_PASSWORD = '/resources/front/passwordrecovery';

const changePassword = async (user, password) => {
  return axios.patch(BASE_URL + CHANGE_PASSWORD, {username: user, password});
};

export default changePassword;
