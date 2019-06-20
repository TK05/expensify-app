import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import selectExpenses from '../selectors/expenses'
import sumAllExpenses from '../selectors/expenses-total'

const propTypes = {
  expensesCount: PropTypes.number,
  expensesTotal: PropTypes.number
}

const defaultProps = {
  expensesCount: 0,
  expensesTotal: 0
}

export function ExpenseSummary({ expensesCount, expensesTotal }) {
  const expensesWord = expensesCount === 1 ? 'expense' : 'expenses'
  const formattedSum = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(expensesTotal)
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span> {expensesWord} totalling <span>{formattedSum}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

ExpenseSummary.propTypes = propTypes
ExpenseSummary.defaultProps = defaultProps

const mapStateToProps = state => ({
  expensesCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: sumAllExpenses(state.expenses)
})

export default connect(mapStateToProps)(ExpenseSummary)
