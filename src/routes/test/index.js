export default (registerModel, app) => ({
  path: '/',
  getIndexRoute (nextState, cb) {
    require.ensure([], (require) => {
      registerModel(app, require('./model/index'))
      cb(null, { component: require('./container/index') })
    }, 'test')
  },
})
