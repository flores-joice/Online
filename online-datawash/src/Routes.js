import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { history } from './infra/history'
import Login from './pages/login'
import Home from './pages/home'

export default props => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)