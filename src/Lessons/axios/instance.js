import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_DB_URL,
  timeout: 1200
})

export default instance;