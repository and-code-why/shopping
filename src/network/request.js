import axios from 'axios'

export function request(config) {
    const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000/api/h8',
            timeout: 5000
        })
        //请求拦截器
    axios.interceptors.request.use(function(config) {
        // 在发送请求之前做些什么，例如加入token
        return config;
    }, function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
    //响应拦截器
    axios.interceptors.response.use(function(response) {
        // 在接收响应做些什么，例如跳转到登录页
        return response;
    }, function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    return instance(config);
}