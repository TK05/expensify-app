import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

/* eslint-disable no-undef */
test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render expsense list with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})
