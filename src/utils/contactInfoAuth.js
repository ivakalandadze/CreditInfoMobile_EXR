import axios from 'axios';

const BASE_URL = 'http://myci-adm.test.ol.ge/mci-back';
const EXTRA_USER = '/resources/front/customer/extra';

const contactInfoAuth = async (
  address,
  countryId,
  email,
  birthDate,
  accessToken,
) => {
  return axios.put(
    BASE_URL + EXTRA_USER,
    {
      address: address,
      birthDate: birthDate,
      countryId: countryId,
      email: email,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};

export default contactInfoAuth;
