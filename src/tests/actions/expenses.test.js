import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  startAddExpense,
  addExpense,
  startEditExpense,
  editExpense,
  startRemoveExpense,
  removeExpense,
  startSetExpenses,
  setExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'


const uid = 'testuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

/* eslint-disable no-undef */
beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({
    id, description, note, amount, createdAt
  }) => {
    expensesData[id] = {
      description, note, amount, createdAt
    }
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  const expected = {
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  }
  expect(action).toEqual(expected)
})

test('should remove expenses from database', (done) => {
  const store = createMockStore(defaultAuthState)
  const { id } = expenses[0]

  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
      .then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
      })
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' })
  const expected = {
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  }
  expect(action).toEqual(expected)
})

test('should edit expense from database', (done) => {
  const store = createMockStore(defaultAuthState)
  const { id, ...expense } = expenses[0]
  const updates = {
    description: 'Test edit',
    amount: '987.43'
  }

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
      .then((snapshot) => {
        expect(snapshot.val()).toEqual({
          ...expense,
          ...updates
        })
        done()
      })
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[0])
  const expected = {
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  }
  expect(action).toEqual(expected)
})

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseData = {
    description: 'Test description',
    note: 'test note',
    amount: '123.45',
    createdAt: 123456789
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expected = {
    description: '',
    note: '',
    amount: '0',
    createdAt: 0
  }

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expected
      }
    })

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expected)
    done()
  })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from database', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})
