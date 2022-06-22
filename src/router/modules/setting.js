/*
 * @Author: luo_h603
 * @Date: 2022-06-22 14:53:40
 * @LastEditTime: 2022-06-22 17:49:22
 * @LastEditors: luo_h603
 * @Description: 公司管理
 * God help those who help themselves
 */
import Layout from '@/layout'

export default {
    path: '/setting',
    // name: 'setting',
    component: Layout,
    children: [{
        path: '',
        name: 'setting',
        component: () =>
            import ('@/views/setting'),
        meta: { title: '公司管理', icon: 'setting' }
    }]
}