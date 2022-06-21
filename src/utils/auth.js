/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-21 15:55:24
 * @LastEditors: luo_h603
 * @Description: 授权token
 * God help those who help themselves
 */
import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token'
const timeKey = 'hrsaas-timestamp-key' // 设置一个独一无二的key,用于存储时间戳
    // 获取token
export function getToken() {
    return Cookies.get(TokenKey)
}
// 设置token
export function setToken(token) {
    return Cookies.set(TokenKey, token)
}
// 删除token
export function removeToken() {
    return Cookies.remove(TokenKey)
}

// 获取时间戳
export function getTimeStamp() {
    return Cookies.get(timeKey)
}
// 设置时间戳
export function setTimeStamp() {
    return Cookies.set(timeKey, Date.now())
}