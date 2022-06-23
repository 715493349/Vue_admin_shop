/*
 * @Author: luo_h603
 * @Date: 2022-06-23 01:52:26
 * @LastEditTime: 2022-06-23 15:05:08
 * @LastEditors: luo_h603
 * @Description: 公司与角色
 * God help those who help themselves
 */
import request from '@/utils/request'

// 公司角色信息
export function getRoleList(params) {
    return request({
        url: '/sys/role',
        method: 'get',
        params
    })
}

// 获取公司信息
export function getCompanyInfo(companyId) {
    return request({
        url: `/company/${companyId}`,
        method: 'get'
    })
}

// 删除角色
export function deleteRole(id) {
    return request({
        url: `/sys/role/${id}`,
        method: 'delete'
    })
}

// 获取角色信息
export function getRoleDetail(id) {
    return request({
        url: `/sys/role/${id}`
    })
}

// 修改角色
export function updateRole(data) {
    return request({
        url: `/sys/role/${data.id}`,
        data,
        method: 'put'
    })
}
// 新增角色
export function addRole(data) {
    return request({
        url: `/sys/role`,
        data,
        method: 'post'
    })
}