import axios from 'axios';

const baseURL = 'No les pongo a donde hago la peticion disculpen';

export default (url, method, data, headers) =>
  axios({
    baseURL,
    method,
    url,
    data,
    headers: {
    ... headers}
  });