import axios from 'axios';


const apiService = axios.create({
  baseURL: 'http://192.168.43.224:8080',
  withCredentials: true,
});


export default apiService;
