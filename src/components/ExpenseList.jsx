import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import selectExpenses from '../selectors/expenses'
import ExpenseListItem from './ExpenseListItem'


const propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}

const defaultProps = {
  expenses: []
}

export function ExpenseList({ expenses }) {
  return (
    <div>
      {
        expenses.length === 0 ? (
          <p>No Expenses</p>
        ) : (
          expenses.map(expense => (
            <ExpenseListItem
              key={expense.id}
              {...expense}
            />
          ))
        )
      }
    </div>
  )
}

ExpenseList.propTypes = propTypes
ExpenseList.defaultProps = defaultProps

const mapStateToProps = state => (
  {
    expenses: selectExpenses(state.expenses, state.filters)
  }
)

export default connect(mapStateToProps)(ExpenseList)
