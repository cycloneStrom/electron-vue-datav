import axios from 'axios'
import apiUrl from "@/assets/http/apiUrl";
import router from "@/router";

const qs = require('qs');

/*创建axios实例
* */
const request = axios.create({
    baseURL: apiUrl.server,
    timeout: 10000
});

/*请求拦截
* */
request.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    /*qs处理*/
    if (config.method === 'post' || config.method === 'POST') {
        config.data = qs.stringify(config.data);
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    /*带上token*/
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

/*响应拦截
* */
request.interceptors.response.use(
    response => {
        return response // 返回请求成功结果，status=200
    },
    err => {
        // 请求失败时，即status!=200
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '错误请求';
                    break;
                case 401:
                    err.message = '未授权，请重新登录';
                    break;
                case 403:
                    err.message = '禁止访问';
                    break;
                case 404:
                    err.message = '请求错误,未找到该资源';
                    break;
                case 405:
                    err.message = '请求方法未允许';
                    break;
                case 408:
                    err.message = '请求超时';
                    break;
                case 413:
                    err.message = '上传文件过大';
                    break;
                case 500:
                    err.message = '服务器端出错';
                    break;
                case 501:
                    err.message = '网络未实现';
                    break;
                case 502:
                    err.message = '网络错误';
                    break;
                case 503:
                    err.message = '服务不可用';
                    break;
                case 504:
                    err.message = '网络超时';
                    break;
                case 505:
                    err.message = 'http版本不支持该请求';
                    break;
                default:
                    err.message = `连接错误,${err.response.msg}`
            }
        } else {
            err.message = '当前网络状态不佳'
        }
        if (err.response && err.response.status === 401) {
            router.replace({
                path: `/login?redirect=${window.location.href.split(/[#]/g)[1]}`
            })
        }
        return Promise.reject(err)
    });


export default request
