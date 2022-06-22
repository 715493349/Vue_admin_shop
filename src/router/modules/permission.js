/*
 * @Author: luo_h603
 * @Date: 2022-06-22 14:53:40
 * @LastEditTime: 2022-06-22 17:49:40
 * @LastEditors: luo_h603
 * @Description: 权限管理
 * God help those who help themselves
 */
import Layout from '@/layout'

export default {
    path: '/permission',
    // name: 'permission',
    component: Layout,
    children: [{
        path: '',
        name: 'permission',
        component: () =>
            import ('@/views/permission'),
        meta: { title: '权限管理', icon: 'permission' }
    }]
}