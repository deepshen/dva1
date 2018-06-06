
export default (registerModel, app) => ({
  path: 'test',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      registerModel(app, require('./model/testModel').default)
      cb(null, require('./container/testComtainer'))
    }, 'test')
  },
})
