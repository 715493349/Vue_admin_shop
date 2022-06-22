/*
 * @Author: luo_h603
 * @Date: 2022-06-22 14:53:40
 * @LastEditTime: 2022-06-22 18:02:28
 * @LastEditors: luo_h603
 * @Description: 考勤管理
 * God help those who help themselves
 */
import Layout from '@/layout'

export default {
    path: '/attendances',
    // name: 'attendances',
    component: Layout,
    children: [{
        path: '',
        name: 'attendances',
        component: () =>
            import ('@/views/attendances'),
        meta: {
            title: '考勤管理',
            icon: 'attendances'
        }
    }]
}