import moment from 'moment'

import filtersReducer from '../../reducers/filters'

/* eslint-disable no-undef */
test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  const expected = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  expect(state).toEqual(expected)
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  const expected = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  expect(state).toEqual(expected)
})

test('should set sortBy to date', () => {
  const currentState = {
    text: 'abc',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  const expected = {
    text: 'abc',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  expect(state).toEqual(expected)
})

test('should set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'abc123' }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe('abc123')
})

test('should set startDate filter', () => {
  const startDate = moment().startOf('month').subtract(10, 'days')
  const action = { type: 'SET_START_DATE', startDate }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toBe(startDate)
})

test('should set endDate filter', () => {
  const endDate = moment().startOf('month').add(10, 'days')
  const action = { type: 'SET_END_DATE', endDate }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toBe(endDate)
})
