/* eslint-disable prefer-arrow-callback */
import axios from 'axios';


const config = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  withCredentials : true
});


export default config;
