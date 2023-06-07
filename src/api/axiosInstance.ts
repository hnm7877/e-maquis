import axios from 'axios';
import { ENV } from '../app.config';

export const axiosInstance = axios.create({
  baseURL: ENV.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('em_auth_token');
    if (token) {
      if (config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
