/*
 * @Author: luo_h603
 * @Date: 2022-06-22 14:53:40
 * @LastEditTime: 2022-06-22 17:33:48
 * @LastEditors: luo_h603
 * @Description: 审批管理
 * God help those who help themselves
 */
import Layout from '@/layout'

// expect default {
export default {
    path: '/approvals',
    // name: 'approvals',
    component: Layout,
    children: [{
        path: '',
        name: 'approvals',
        component: () =>
            import ('@/views/approvals'),
        meta: {
            title: '审批管理',
            icon: 'form'
        }
    }]
}