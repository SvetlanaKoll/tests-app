import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '../react-auth0-spa'
import verifyScope from '../utils/verifyScope'

const PrivateRoute = ({ Component, path, requiredScope = [], history, ...rest }) => {
  const { isAuthenticated, scope } = useAuth0()

  if (!verifyScope(scope, requiredScope)) {
    return <Redirect to='/' />
  }

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null

  return <Route path={path} render={render} {...rest} />
}

export default PrivateRoute
