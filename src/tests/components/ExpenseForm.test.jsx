import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

/* eslint-disable no-undef */
test('should render ExpenseForm', () => {
  const wrapper = shallow(
    <ExpenseForm
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(
    <ExpenseForm
      expense={expenses[0]}
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(
    <ExpenseForm
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(
    <ExpenseForm
      expense={expenses[0]}
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  wrapper.find('input').at(0).simulate('change', { target: { value } })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New note'
  const wrapper = shallow(
    <ExpenseForm
      expense={expenses[0]}
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  wrapper.find('textarea').simulate('change', { target: { value } })
  expect(wrapper.state('note')).toBe(value)
})

test('should set description on input change', () => {
  const value = '19.99'
  const wrapper = shallow(
    <ExpenseForm
      expense={expenses[0]}
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  wrapper.find('input').at(1).simulate('change', { target: { value } })
  expect(wrapper.state('amount')).toBe(value)
})

test('should NOT set amount if invalid input', () => {
  const value = '123.456'
  const wrapper = shallow(
    <ExpenseForm
      expense={expenses[0]}
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  wrapper.find('input').at(1).simulate('change', { target: { value } })
  expect(wrapper.state('amount')).not.toBe(value)
  expect(wrapper.state('amount')).toBe(expenses[0].amount)
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const {
    description, amount, note, createdAt
  } = expenses[0]
  const wrapper = shallow(
    <ExpenseForm
      expense={expenses[0]}
      onSubmit={onSubmitSpy}
      typeString="test"
    />
  )
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description,
    amount,
    note,
    createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(
    <ExpenseForm
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendarFocus on change', () => {
  const focused = true
  const wrapper = shallow(
    <ExpenseForm
      onSubmit={jest.fn()}
      typeString="test"
    />
  )
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
