/*
 * @Author: luo_h603
 * @Date: 2022-06-22 14:53:40
 * @LastEditTime: 2022-06-22 17:33:28
 * @LastEditors: luo_h603
 * @Description: 员工管理
 * God help those who help themselves
 */
import Layout from '@/layout'

export default {
    path: '/employees',
    // name: 'employees',
    component: Layout,
    children: [{
        path: '',
        name: 'employees',
        component: () =>
            import ('@/views/employees'),
        meta: {
            title: '员工管理',
            icon: 'user'
        }
    }]
}