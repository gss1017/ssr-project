import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/proxy' // 客户端的请求 通过node中间层来代理请求
});

export default axiosInstance;
