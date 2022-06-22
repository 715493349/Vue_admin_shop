/*
 * @Author: luo_h603
 * @Date: 2022-06-22 14:53:40
 * @LastEditTime: 2022-06-22 18:16:51
 * @LastEditors: luo_h603
 * @Description: 组织架构
 * God help those who help themselves
 */
import Layout from '@/layout'

export default {
    path: '/departments',
    // name: 'departments',
    component: Layout,
    children: [{
        path: '',
        name: 'departments',
        component: () =>
            import ('@/views/departments'),
        meta: {
            title: '组织架构',
            icon: 'tree'
        }
    }]
}