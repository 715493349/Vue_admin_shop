/*
 * @Author: luo_h603
 * @Date: 2022-06-22 14:53:40
 * @LastEditTime: 2022-06-22 17:49:11
 * @LastEditors: luo_h603
 * @Description: 社保管理
 * God help those who help themselves
 */
import Layout from '@/layout'

export default {
    path: '/social',
    // name: 'social',
    component: Layout,
    children: [{
        path: '',
        name: 'social',
        component: () =>
            import ('@/views/social'),
        meta: { title: '社保管理', icon: 'social' }
    }]
}