/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-20 16:46:15
 * @LastEditors: luo_h603
 * @Description: 
 * God help those who help themselves
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// require.context创建自己的上下文，一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式
const req = require.context('./svg', false, /\.svg$/) //目录目录读取文件  读取所有的svg文件，
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)