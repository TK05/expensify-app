import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { startLogout as logoutAction } from '../actions/auth'


const propTypes = {
  startLogout: PropTypes.func.isRequired
}

export function Header({ startLogout }) {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <button
        type="button"
        onClick={startLogout}
      >
        Logout
      </button>
    </header>
  )
}

Header.propTypes = propTypes

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(logoutAction())
})

export default connect(null, mapDispatchToProps)(Header)
