import axios from 'axios';

const baseURL = 'http://192.168.150.25/ApiRest/APIAppMovilInd/v1/AppMovilInd/';

export default (url, method, data, headers) =>
  axios({
    baseURL,
    method,
    url,
    data,
    headers: {
    ... headers}
  });