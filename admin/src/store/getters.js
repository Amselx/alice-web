const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    username: state => state.user.username,
    roles: state => state.user.roles,
    asyncRouters: state => state.permission.asyncRouters,
    permission_routers: state => state.permission.routers
}
export default getters
