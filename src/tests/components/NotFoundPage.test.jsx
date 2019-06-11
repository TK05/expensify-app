import React from 'react'
import { shallow } from 'enzyme'

import NotFoundPage from '../../components/NotFoundPage'

/* eslint-disable no-undef */
test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />)
  expect(wrapper).toMatchSnapshot()
})
