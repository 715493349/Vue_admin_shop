/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-22 11:26:02
 * @LastEditors: luo_h603
 * @Description: 用户
 * God help those who help themselves
 */

import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
// 状态
const state = {
    // 设置token共享的状态
    token: 'getToken()',
    // 用户信息
    userInfo: {},
}

// 修改状态
const mutations = {
    // 设置token
    setToken(state, token) {
        state.token = token // 设置token  只是修改state的数据  123 =》 1234
            // vuex变化 => 缓存数据
        setToken(token) // vuex和 缓存数据的同步
    },
    // 删除token
    removeToken(state) {
        state.token = ''
        removeToken()
    },
    setUserInfo(state, res) {
        // 更新一个对象
        state.userInfo = res
            // state.userInfo = {...res }   用浅拷贝的方式去赋值对象 因为这样数据更新之后，才会触发组件的更新
    },
    // 删除用户信息
    removeUserInfo(state) {
        state.userInfo = {}
    }
}

// 执行异步
// 登录action要做的事情,用登录接口,成功后设置token到vuex,失败则返回失
const actions = {
    // 定义login action 也许要参数，调用action时传参,传递过来的参数就是login action的参数
    async login(context, data) {
        // 调用login接口,返回promise对象
        const res = await login(data)
            // axios默认给数据加了一层data
            // 登录接口调用成功 用户名和密码是正确
            // 现在已有有用户token
            // actions 修改state 必须通过mutations
        context.commit('setToken', res)
    },
    async getUserInfo(context) {
        const res = await getUserInfo()
        context.commit('setUserInfo', res) //提交mutations
        return res //做权限时
    },
    // 登出
    logout(context) {
        // 删除token
        context.commit('removeToken') // 不仅仅删除了vuex中的 还删除了缓存中的
            // 删除用户资料
        context.commit('removeUserInfo') // 删除用户信息
    }
}

export default {
    // 命名空间
    namespaced: true,
    state,
    mutations,
    actions
}