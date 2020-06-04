import axios from 'axios';
import enviroment from '../../../environment';
const {apiKeyAndroid, apiKeyIOS} = enviroment();
const baseURL = 'https://classroom.googleapis.com/v1/courses';

export default (url,params, method, data, headers) =>
  axios({
    baseURL,
    params: {
    ...params
    },
    method,
    url,
    data,
    headers: {
    ... headers}
  });