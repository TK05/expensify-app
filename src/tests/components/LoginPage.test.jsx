import React from 'react'
import { shallow } from 'enzyme'

import { LoginPage } from '../../components/LoginPage'


/* eslint-disable no-undef */
test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage startLogin={() => true} />)
  expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on button click', () => {
  const startLoginSpy = jest.fn()
  const wrapper = shallow(
    <LoginPage
      startLogin={startLoginSpy}
    />
  )
  wrapper.find('button').simulate('click')
  expect(startLoginSpy).toHaveBeenCalled()
})
