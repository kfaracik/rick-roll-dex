import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ERR_BAD_REQUEST') {
      console.log('TODO: 404');
    } else {
      console.error('API Error:', error.code);
    }
    return Promise.reject(error);
  },
);

export default apiClient;
