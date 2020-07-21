import axios from 'axios';
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