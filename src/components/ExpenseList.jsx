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
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {
          expenses.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No Expenses</span>
            </div>
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
