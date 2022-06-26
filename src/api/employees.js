/*
 * @Author: luo_h603
 * @Date: 2022-06-24 01:38:55
 * @LastEditTime: 2022-06-26 16:45:30
 * @LastEditors: luo_h603
 * @Description: 员工管理接口
 * God help those who help themselves
 */
import request from '@/utils/request'

//  获取员简单列表
export function getEmployeeSimple() {
    return request({
        url: '/sys/user/simple',
    })
}

//  获取员工综合列表
export function getEmployeeList(params) {
    return request({
        url: '/sys/user',
        params
    })
}

// 删除员工
export function deleteEmployee(id) {
    return request({
        url: `/sys/user/${id}`,
        method: 'delete'
    })
}

// 新增员工
export function addEmployee(data) {
    return request({
        method: 'post',
        url: '/sys/user',
        data
    })
}

// 导入员工
export function importEmployee(data) {
    return request({
        url: '/sys/user/batch',
        method: 'post',
        data
    })
}