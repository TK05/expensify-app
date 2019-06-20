import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


export default class ExpenseForm extends React.Component {
  static propTypes = {
    expense: PropTypes.shape({
      description: PropTypes.string,
      note: PropTypes.string,
      amount: PropTypes.string,
      createdAt: PropTypes.number
    }),
    onSubmit: PropTypes.func.isRequired,
    typeString: PropTypes.string.isRequired
  }

  static defaultProps = {
    expense: {},
  }

  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? props.expense.amount : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
      typeString: props.typeString
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^[0-9]{1,}(\.[0-9]{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = (e) => {
    const {
      description, amount, note, createdAt
    } = this.state
    const { onSubmit } = this.props
    e.preventDefault()
    if (!description || !amount) {
      this.setState(() => ({
        error: 'Please provide description and amount'
      }))
    } else {
      this.setState(() => ({ error: '' }))
      onSubmit({
        description,
        amount: Number(amount).toFixed(2),
        note,
        createdAt: createdAt.valueOf()
      })
    }
  }

  render() {
    const {
      description, note, amount, createdAt, calendarFocused, error, typeString
    } = this.state
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {error && <p className="form__error">{error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          value={description || ''}
          onChange={this.onDescriptionChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={amount || ''}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={this.onDateChange}
          focused={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          block
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button" type="submit">
            {`${typeString} Expense`}
          </button>
        </div>
      </form>
    )
  }
}
