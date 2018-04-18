import axios from 'axios';

export default axios.create({
  baseURL: '/',
  timeout: 0,
  headers: { 'Cache-Control': 'no-cache, must-revalidate' },
  withCredentials: true,
});
