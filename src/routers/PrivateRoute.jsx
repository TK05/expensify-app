import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Header from '../components/Header'


const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export function PrivateRoute({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      component={props => (
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      )}
    />
  )
}

PrivateRoute.propTypes = propTypes

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
