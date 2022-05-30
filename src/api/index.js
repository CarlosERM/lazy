/* eslint-disable no-undef */
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SECRET_API,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

axiosClient.defaults.withCredentials = true;

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then((response) => response.data);
}

export function postRequest(URL, data) {
  return axiosClient.post(`/${URL}`, data).then((response) => response);
}

export function putRequest(URL, data) {
  return axiosClient.put(`/${URL}`, data).then((response) => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then((response) => response);
}
