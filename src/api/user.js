/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-21 11:25:38
 * @LastEditors: luo_h603
 * @Description: 用户登录
 * God help those who help themselves
 */
import request from '@/utils/request'

// 登录
export function login(data) {
    // return返回一个promise对象
    return request({
        url: '/sys/login',
        method: 'post',
        data
    })

}

export function getInfo() {

}

export function logout() {

}