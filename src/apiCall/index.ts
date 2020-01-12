import axios from 'axios';
import { baseUrl } from '../constants';

const composeData = (method: string, body: any): any =>
  (method === 'post' || method === 'put') ? { data: body } : {};
const constructToken = (token: string): any =>
  token ? { Authorization: `Bearer ${token}`} : {};
/**
 * Returns a promise
 * @param url resource endpoint
 * @param method http method
 * @param body request body
 * @param token authentication token
 * @returns {Promise} - Promise object of HTTP request
 */
const apiCall = (
  url: string,
  method: string,
  body: any,
  token: string = '',
) => {
  const reqUrl = `${baseUrl}${url}`;
  return axios({
    method,
    url: reqUrl,
    ...composeData(method, body),
    headers: {
      ...constructToken(token),
    }
  })
}

export default apiCall;
