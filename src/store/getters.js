const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  role: state => state.user.role,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  userType: state => state.user.userType,
  userName: state => state.user.userName,
  citizens: state => state.citizens.citizens
}
export default getters
