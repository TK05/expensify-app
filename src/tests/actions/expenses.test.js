import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

/* eslint-disable no-undef */
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  const expected = {
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  }
  expect(action).toEqual(expected)
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' })
  const expected = {
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  }
  expect(action).toEqual(expected)
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense({
    description: 'New expense',
    note: 'New note',
    amount: 1234.56,
    createdAt: 12345
  })
  const expected = {
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'New expense',
      note: 'New note',
      amount: '1234.56',
      createdAt: 12345
    }
  }
  expect(action).toEqual(expected)
})

test('should setup add expense action object with default values', () => {
  const action = addExpense()
  const expected = {
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: '0.00',
      createdAt: 0
    }
  }
  expect(action).toEqual(expected)
})
