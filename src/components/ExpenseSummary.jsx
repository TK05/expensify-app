import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import selectExpenses from '../selectors/expenses'
import sumAllExpenses from '../selectors/expenses-total'

const propTypes = {
  expensesLength: PropTypes.number,
  expensesTotal: PropTypes.number
}

const defaultProps = {
  expensesLength: 0,
  expensesTotal: 0
}

export function ExpenseSummary({ expensesLength, expensesTotal }) {
  const expensesWord = expensesLength === 1 ? 'expense' : 'expenses'
  const formattedSum = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(expensesTotal)
  return (
    <div>
      <h3>Viewing {expensesLength} {expensesWord} totalling {formattedSum}</h3>
    </div>
  )
}

ExpenseSummary.propTypes = propTypes
ExpenseSummary.defaultProps = defaultProps

const mapStateToProps = state => ({
  expensesLength: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: sumAllExpenses(state.expenses)
})

export default connect(mapStateToProps)(ExpenseSummary)
