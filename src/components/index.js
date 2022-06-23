/*
 * @Author: luo_h603
 * @Date: 2022-06-23 17:01:28
 * @LastEditTime: 2022-06-23 17:02:51
 * @LastEditors: luo_h603
 * @Description: 负责全局自定义组件注册
 * God help those who help themselves
 */

import PageTools from './PageTools'
export default {
    install(Vue) {
        //  注册全局的通用栏组件对象
        Vue.component('PageTools', PageTools)
    }
}