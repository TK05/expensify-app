import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startLogin as loginAction } from '../actions/auth'


const propTypes = {
  startLogin: PropTypes.func.isRequired
}

export function LoginPage({ startLogin }) {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button
          className="button"
          type="button"
          onClick={startLogin}
        >
          Login with Google
        </button>
      </div>
    </div>
  )
}

LoginPage.propTypes = propTypes

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(loginAction())
})

export default connect(null, mapDispatchToProps)(LoginPage)
