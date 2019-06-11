import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

/* eslint-disable no-undef */
let editExpenseItemSpy
let removeExpenseItemSpy
let historySpy
let wrapper
const testExpense = expenses[0]

beforeEach(() => {
  editExpenseItemSpy = jest.fn()
  removeExpenseItemSpy = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      expense={testExpense}
      editExpenseItem={editExpenseItemSpy}
      removeExpenseItem={removeExpenseItemSpy}
      history={historySpy}
    />
  )
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(testExpense)
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(editExpenseItemSpy).toHaveBeenLastCalledWith(testExpense.id, testExpense)
})

test('should handle remove expense click', () => {
  wrapper.find('button').simulate('click')
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(removeExpenseItemSpy).toHaveBeenLastCalledWith({ id: testExpense.id })
})
