import axios from 'axios'
import storage from '@/service/storage';

const service = axios.create({
    baseURL: "/api",
    timeout: 1000 * 60,
});
// request拦截器
service.interceptors.request.use((config) => {
    Object.assign(config.headers, { Authorization: `${storage.get(storage.USER_TOKEN)}` })
    return config
}, error => Promise.reject(error))

// response拦截器
service.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default service;
