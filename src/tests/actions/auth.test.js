import { login, logout } from '../../actions/auth'

/* eslint-disable no-undef */
test('should setup login action object', () => {
  const uid = 'abc123'
  const action = login(uid)
  const expected = {
    type: 'LOGIN',
    uid
  }
  expect(action).toEqual(expected)
})

test('should setup logout action object', () => {
  const action = logout()
  const expected = {
    type: 'LOGOUT',
  }
  expect(action).toEqual(expected)
})
