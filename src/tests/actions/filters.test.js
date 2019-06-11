import moment from 'moment'

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters'

/* eslint-disable no-undef */
test('should generate set text filter action object with text value', () => {
  const testText = 'Something to test.'
  const result = setTextFilter(testText)
  const expected = {
    type: 'SET_TEXT_FILTER',
    text: testText
  }
  expect(result).toEqual(expected)
})

test('should generate set text filter action object with default', () => {
  const result = setTextFilter()
  const expected = {
    type: 'SET_TEXT_FILTER',
    text: ''
  }
  expect(result).toEqual(expected)
})

test('should set sort by filter action objec to sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should set sort by filter action objec to sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should generate set start date action object', () => {
  const momentObj = moment(0)
  const result = setStartDate(momentObj)
  const expected = {
    type: 'SET_START_DATE',
    startDate: momentObj
  }
  expect(result).toEqual(expected)
})

test('should generate set end date action object', () => {
  const momentObj = moment(123456789)
  const result = setEndDate(momentObj)
  const expected = {
    type: 'SET_END_DATE',
    endDate: momentObj
  }
  expect(result).toEqual(expected)
})
