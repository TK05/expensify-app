import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

import {
  setTextFilter as textFilter,
  sortByAmount as byAmount,
  sortByDate as byDate,
  setStartDate as startDateFunc,
  setEndDate as endDateFunc
} from '../actions/filters'


export class ExpenseListFilters extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    sortBy: PropTypes.string.isRequired,
    startDateObj: PropTypes.objectOf(PropTypes.any),
    endDateObj: PropTypes.objectOf(PropTypes.any),
    setTextFilter: PropTypes.func.isRequired,
    sortByAmount: PropTypes.func.isRequired,
    sortByDate: PropTypes.func.isRequired,
    setStartDate: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired
  }

  static defaultProps = {
    text: '',
    startDateObj: {},
    endDateObj: {}
  }

  state = {
    calendarFocused: null
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  onTextChange = (e) => {
    const { setTextFilter } = this.props
    setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    const { sortByDate, sortByAmount } = this.props
    if (e.target.value === 'date') {
      sortByDate()
    } else if (e.target.value === 'amount') {
      sortByAmount()
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { setStartDate, setEndDate } = this.props
    setStartDate(startDate)
    setEndDate(endDate)
  }

  render() {
    const {
      text,
      sortBy,
      startDateObj,
      endDateObj
    } = this.props
    const { calendarFocused } = this.state

    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={this.onTextChange}
        />
        <select
          value={sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={startDateObj}
          startDateId="startDate"
          endDate={endDateObj}
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.filters.text,
  sortBy: state.filters.sortBy,
  startDateObj: state.filters.startDate,
  endDateObj: state.filters.endDate
})

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(textFilter(text)),
  sortByAmount: () => dispatch(byAmount()),
  sortByDate: () => dispatch(byDate()),
  setStartDate: dateObj => dispatch(startDateFunc(dateObj)),
  setEndDate: dateObj => dispatch(endDateFunc(dateObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
