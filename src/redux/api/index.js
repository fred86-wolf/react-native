import axios from 'axios';

const baseURL = 'https://www.limpiezamexico.mx/ApiRest/APIAppMovilInd/v1/AppMovilInd/';

export default (url, method, data, headers) =>
  axios({
    baseURL,
    method,
    url,
    data,
    headers: {
    ... headers}
  });