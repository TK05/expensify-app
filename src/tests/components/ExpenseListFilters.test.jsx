import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

/* eslint-disable no-undef */
let setTextFilterSpy
let sortByDateSpy
let sortByAmountSpy
let setStartDateSpy
let setEndDateSpy
let wrapper

beforeEach(() => {
  setTextFilterSpy = jest.fn()
  sortByDateSpy = jest.fn()
  sortByAmountSpy = jest.fn()
  setStartDateSpy = jest.fn()
  setEndDateSpy = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      text={filters.text}
      sortBy={filters.sortBy}
      startDateObj={filters.startDateObj}
      endDateObj={filters.endDateObj}
      setTextFilter={setTextFilterSpy}
      sortByDate={sortByDateSpy}
      sortByAmount={sortByAmountSpy}
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy}
    />
  )
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    text: altFilters.text,
    sortBy: altFilters.sortBy,
    startDateObj: altFilters.startDateObj,
    endDateObj: altFilters.endDateObj
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value = 'abc123'
  wrapper.find('input').simulate('change', { target: { value } })
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
  wrapper.setProps({
    sortBy: 'amount'
  })
  wrapper.find('select').simulate('change', { target: { value: 'date' } })
  expect(sortByDateSpy).toHaveBeenCalled()
  expect(sortByAmountSpy).not.toHaveBeenCalled()
})

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } })
  expect(sortByAmountSpy).toHaveBeenCalled()
  expect(sortByDateSpy).not.toHaveBeenCalled()
})

test('should handle date changes', () => {
  const startDate = moment(1234)
  const endDate = moment(5678)
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
