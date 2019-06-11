import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

/* eslint-disable no-undef */
let addNewExpenseSpy
let historySpy
let wrapper

beforeEach(() => {
  addNewExpenseSpy = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(
    <AddExpensePage
      addNewExpense={addNewExpenseSpy}
      history={historySpy}
    />
  )
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(addNewExpenseSpy).toHaveBeenLastCalledWith(expenses[0])
})
