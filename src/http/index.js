import axios from 'axios';

export const API_URL = 'https://api.github.com/search';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
});

export default api;
