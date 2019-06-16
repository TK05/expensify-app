import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startLogin as loginAction } from '../actions/auth'


const propTypes = {
  startLogin: PropTypes.func.isRequired
}

export function LoginPage({ startLogin }) {
  return (
    <div>
      <h1>Login</h1>
      <button
        type="button"
        onClick={startLogin}
      >
        Login
      </button>
    </div>
  )
}

LoginPage.propTypes = propTypes

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(loginAction())
})

export default connect(null, mapDispatchToProps)(LoginPage)
