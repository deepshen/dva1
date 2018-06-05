export default (registerModel, app) => ({
  path: '/login',
  getIndexRoute (nextState, cb) {
    require.ensure([], (require) => {
      registerModel(app, require('./model/LoginModel'))
      cb(null, { component: require('./container/LoginContainer') })
    }, 'login')
  },
})
