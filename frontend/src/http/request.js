import axios from "axios"
import config from "../config/index"


axios.defaults.baseURL = config.baseURL
// axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
let  instance = axios.create()

// // // 添加请求拦截器
instance.interceptors.request.use(function(config) {
    return config

}, function(error) {
    return Promise.reject(error)
})

// // 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response.data;
}, function(error) {
})

export default instance