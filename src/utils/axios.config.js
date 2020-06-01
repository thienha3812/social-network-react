import axios from 'axios';


const apiService = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});


export default apiService;
