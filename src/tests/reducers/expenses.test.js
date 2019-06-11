import moment from 'moment'

import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

/* eslint-disable no-undef */
test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should NOT remove expense with invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'invalid-id'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const createdAt = moment(123456789)
  const expense = {
    id: 'newID',
    description: 'test',
    note: 'test',
    amount: '12345',
    createdAt
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  const expected = [...expenses, expense]
  expect(state).toEqual(expected)
})

test('should edit an expense', () => {
  const amount = '111.11'
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].amount).toBe(amount)
})

test('should NOT edit expense if expense id not found', () => {
  const amount = '111.11'
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'invalid-id',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
