/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { handleLogout } from '../pages/signin/actions';




const config = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  withCredentials : true
});

axios.interceptors.response.use(()=>{

},(err)=>{
})

export default config;
