import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

/* eslint-disable no-undef */
let editExpenseSpy
let removeExpenseSpy
let historySpy
let wrapper
const testExpense = expenses[0]

beforeEach(() => {
  editExpenseSpy = jest.fn()
  removeExpenseSpy = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      expense={testExpense}
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
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
  expect(editExpenseSpy).toHaveBeenLastCalledWith(testExpense.id, testExpense)
})

test('should handle remove expense click', () => {
  wrapper.find('button').simulate('click')
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: testExpense.id })
})
