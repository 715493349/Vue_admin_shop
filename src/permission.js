// 权限拦截路由跳转：导航守卫
import router from '@/router'
// 引入store实例， 与组件中的$store差不多
import store from '@/store'
// 引入进度条
import NProgress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

// 定义个白名单， 只有白名单里面的路由才不会被拦截
const whiteList = ['/login', '/404'] // 白名单

// 前置守卫，有一个回调函数，三个参数
// next()：放行，next('/login')：跳转到指定路由
// next(false)：不放行，不跳转
// next(error)：抛出异常，不跳转
// next(地址)：跳转到指定路由
router.beforeEach(async(to, from, next) => {
    // 开启进度条
    NProgress.start()
        // 判断是都有token
    if (store.getters.token) {
        // 有token情况下获取用户信息
        // 如果有token，则放行
        if (to.path === '/login') {
            next('/') // 跳转到首页
        } else {
            // if (!store.getters.userId) {
            //     await store.dispatch('user/getUserInfo')
            // }
            next() // 放行
        }
    } else {
        // 没有token，则跳转到登录页
        // /includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false
        if (whiteList.includes(to.path)) {
            next() // 在白名单中，放行
        } else {
            next('/login') // 不在白名单中，跳转到登录页
        }
        // 手动关闭进度条
        NProgress.done()
    }

})

// 后置守卫
router.afterEach((to, from) => {
    // 关闭进度条
    NProgress.done()
})