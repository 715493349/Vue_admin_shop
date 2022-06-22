/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-22 11:21:09
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

// 获取用户资料
export function getUserInfo() {
    return request({
        url: '/sys/profile',
        method: 'post',
    })
}

// 获取用户详情
export function getUserDetailById(id) {
    return request({
        url: `/sys/user/${id}`
    })
}