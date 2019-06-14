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
        <h1>Add Expense</h1>
        <ExpenseForm
          typeString="Add"
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewExpense: expense => dispatch(startAddExpense(expense))
})

export default connect(null, mapDispatchToProps)(AddExpensePage)
