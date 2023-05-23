import axios from 'axios';

export const publicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setAuthHeader = token => {
  publicInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  publicInstance.defaults.headers.common.Authorization = '';
};
