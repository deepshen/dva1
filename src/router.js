import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import Test from './routes/test'
import Login from './routes/login'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}


const Routers = function ({ history, app }) {
  const routes = [
    Test(registerModel, app),
    Login(registerModel, app),
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
