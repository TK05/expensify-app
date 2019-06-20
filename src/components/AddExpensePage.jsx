import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'


export class AddExpensePage extends React.Component {
  static propTypes = {
    addNewExpense: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired
  }

  onSubmit = (expense) => {
    const { addNewExpense, history } = this.props
    addNewExpense(expense)
    history.push('/')
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            typeString="Add"
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewExpense: expense => dispatch(startAddExpense(expense))
})

export default connect(null, mapDispatchToProps)(AddExpensePage)
