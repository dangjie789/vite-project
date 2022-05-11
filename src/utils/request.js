/* axios二次封装 */

import axios from 'axios'
import { ElMessage } from 'element-plus'
import config from './../config'
import router from '../router/index'
const TOKEN_INVAILD = 'Token验证失败，请重新登陆'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

//创建axios实例对象，添加全局配置

const instance = axios.create({
    baseURL: config.baseApi,
    timeout: 8000
})

//请求拦截
instance.interceptors.request.use((req) => {
    //TO-DO
    const headers = req.headers
    if (!headers.Authroization) { headers.Authroization = 'Bear Token' }
    return req
})

//响应拦截
instance.interceptors.response.use((res) => {
    const { code, data, msg } = res.data
    if (code === 200) {
        return data
    } else if (code === 500001) {
        ElMessage.error(TOKEN_INVAILD)
        setTimeout(() => {
            router.push('/login')
        }, 1500)
        return Promise.reject(TOKEN_INVAILD)
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

//请求核心函数

function request(options) {

    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    let isMock = config.mock
    if (typeof options.mock != 'undefined') {
        isMock = options.mock
    }
    if (config.env === 'prod') {
        instance.defaults.baseURL = config.baseApi
    } else {
        instance.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }
    return instance(options)
}

['get', 'post', 'delete', 'put', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request;