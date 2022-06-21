/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-21 15:42:38
 * @LastEditors: luo_h603
 * @Description: 快捷方式
 * God help those who help themselves
 */
const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token, // 在根级的getters上 开发子模块的属性给别人看
    avatar: state => state.user.avatar,
    name: state => state.user.name
}
export default getters