/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-21 15:09:51
 * @LastEditors: luo_h603
 * @Description: axios二次封装
 * God help those who help themselves
 */

import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
    // 执行npm run dev 启动服务 ===> 开发环境  /api 这个代理只是给开发环境配置的代理
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(config => {
    // 在请求发送之前
    return config
}, error => {
    // 对请求错误
    return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
    // 处理响应数据
    // axios默认加了一层data
    const { success, message, data } = response.data
        // 根据success的成功与否决定下面的操作
    if (success) {
        return data
    } else {
        Message.error(message)
        return Promise.reject(new Error(message))
    }
}, error => {
    // 对响应错误做点什么
    Message.error(error.message) // 提示错误信息
    return Promise.reject(error) //返回执行错误的Promise，
})

export default service