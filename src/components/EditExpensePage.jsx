import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'


export class EditExpensePage extends React.Component {
  static propTypes = {
    expense: PropTypes.objectOf(PropTypes.any).isRequired,
    editExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired
  }

  onSubmit = (editedExpense) => {
    const { editExpense, expense, history } = this.props
    editExpense(expense.id, editedExpense)
    history.push('/')
  }

  onRemove = () => {
    const { removeExpense, expense, history } = this.props
    removeExpense({ id: expense.id })
    history.push('/')
  }

  render() {
    const { expense } = this.props
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            typeString="Edit"
            expense={expense}
            onSubmit={this.onSubmit}
          />
          <button
            className="button button--secondary"
            type="button"
            onClick={this.onRemove}
          >
            Remove Expense
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ expenses }, { match }) => ({
  expense: expenses.find(expense => expense.id === match.params.id)
})

const mapDispatchToProps = dispatch => ({
  editExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
  removeExpense: id => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
