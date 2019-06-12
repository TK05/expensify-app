import getExpensesTotal from '../../selectors/expenses-total'
import expenses, { expensesTotal } from '../fixtures/expenses'

/* eslint-disable no-undef */
test('should return 0 if no expenses', () => {
  const testExpenses = []
  const sum = getExpensesTotal(testExpenses)
  expect(sum).toBe(0)
})

test('should add up a single expense', () => {
  const testExpenses = [{
    id: '12345',
    description: 'Not a real expense',
    note: 'Not a real note',
    amount: '1234.56',
    createdAt: 'Not a real date'
  }]
  const sum = getExpensesTotal(testExpenses)
  expect(sum).toBe(1234.56)
})

test('should add up multiple expenses', () => {
  const sum = getExpensesTotal(expenses)
  expect(sum).toBe(expensesTotal)
})
