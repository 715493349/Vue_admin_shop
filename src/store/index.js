/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-20 16:28:53
 * @LastEditors: luo_h603
 * @Description: 
 * God help those who help themselves
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app, // 折叠展开
        settings, // logo/头部
        user //用户信息
    },
    getters //快捷访问
})

export default store