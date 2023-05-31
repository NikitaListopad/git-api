import axios from "axios";

export const API_URL = 'https://api.github.com/search';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default api;