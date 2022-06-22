/*
 * @Author: luo_h603
 * @Date: 2022-06-22 14:53:40
 * @LastEditTime: 2022-06-22 17:49:32
 * @LastEditors: luo_h603
 * @Description: 工资管理
 * God help those who help themselves
 */
import Layout from '@/layout'

export default {
    path: '/salarys',
    // name: 'salarys',
    component: Layout,
    children: [{
        path: '',
        name: 'salarys',
        component: () =>
            import ('@/views/salarys'),
        meta: { title: '工资管理', icon: 'salarys' }
    }]
}