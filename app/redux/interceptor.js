import axios from 'axios'
import { BASE_URL } from '../utils/const';


const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
})

AxiosInstance.interceptors.response.use((response) =>{
    return response;
}, (error) => {
    const originalRequest = error.config;
    if (!error.response) {
       return Promise.reject('Network Error')
    }
    else if ((error.response.status === 401) && !originalRequest._retry) {
        
    } else {
        return error.response
    }

})

export default AxiosInstance