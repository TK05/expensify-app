import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseSummary } from '../../components/ExpenseSummary'

/* eslint-disable no-undef */
test('should render ExpenseSummary correctly with NO expenses', () => {
  const wrapper = shallow(
    <ExpenseSummary
      expensesLength={0}
      expensesTotal={0}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with ONE expense', () => {
  const wrapper = shallow(
    <ExpenseSummary
      expensesLength={1}
      expensesTotal={1234}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with expenses', () => {
  const wrapper = shallow(
    <ExpenseSummary
      expensesLength={10}
      expensesTotal={123456789.12}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
