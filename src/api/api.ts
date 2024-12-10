import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});


api.interceptors.request.use(
  config => {
    // config.baseURL = 'http://localhost:8000';
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("token")
      // const token = JSON.parse(localStorage.getItem("token",) as string).token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);


export default api;