/*
 * @Author: luo_h603
 * @Date: 2022-06-20 15:31:47
 * @LastEditTime: 2022-06-23 09:51:41
 * @LastEditors: luo_h603
 * @Description: 快捷方式
 * God help those who help themselves
 */
const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token, // 在根级的getters上 开发子模块的属性给别人看
    name: state => state.user.userInfo.username, // 建立用户名称的映射
    userId: state => state.user.userInfo.userId, // 建立用户id的映射
    staffPhoto: state => state.user.userInfo.staffPhoto, // 建立用户头像的映射
    companyId: state => state.user.userInfo.companyId, // 建立公司id的映射
    // avatar: state => state.user.avatar,
    // name: state => state.user.name
}
export default getters