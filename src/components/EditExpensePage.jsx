import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'


export class EditExpensePage extends React.Component {
  static propTypes = {
    expense: PropTypes.objectOf(PropTypes.any).isRequired,
    editExpenseItem: PropTypes.func.isRequired,
    removeExpenseItem: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired
  }

  onSubmit = (editedExpense) => {
    const { editExpenseItem, expense, history } = this.props
    editExpenseItem(expense.id, editedExpense)
    history.push('/')
  }

  onRemove = () => {
    const { removeExpenseItem, expense, history } = this.props
    removeExpenseItem({ id: expense.id })
    history.push('/')
  }

  render() {
    const { expense } = this.props
    return (
      <div>
        <ExpenseForm
          typeString="Edit"
          expense={expense}
          onSubmit={this.onSubmit}
        />
        <button
          type="button"
          onClick={this.onRemove}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ expenses }, { match }) => ({
  expense: expenses.find(expense => expense.id === match.params.id)
})

const mapDispatchToProps = dispatch => ({
  editExpenseItem: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpenseItem: id => dispatch(removeExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
