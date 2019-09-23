import axios from 'axios';

const getServerAxiosInstance = (req) => axios.create({
    baseURL: 'http://localhost:8002',
    headers: {
        'Cookie': req.headers.cookie // 代理转发请求默认不携带客户端的cookie，所以手动加入cookie
    }
});

export default getServerAxiosInstance;
