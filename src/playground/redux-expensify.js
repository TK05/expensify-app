import { createStore, combineReducers } from 'redux'
import uuidv4 from 'uuid/v4'


const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = Date.now()
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

const setStartDate = timestamp => ({
  type: 'SET_START_DATE',
  timestamp
})

const setEndDate = timestamp => ({
  type: 'SET_END_DATE',
  timestamp
})

// Expenses reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => (
        expense.id === action.id ? { ...expense, ...action.updates } : expense
      ))
    default:
      return state
  }
}

// Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.timestamp }
    case 'SET_END_DATE':
      return { ...state, endDate: action.timestamp }
    default:
      return state
  }
}

// Get visible expenses
const getVisibleExpenses = (
  expenses,
  {
    text,
    sortBy,
    startDate,
    endDate
  }
) => expenses.filter((expense) => {
  const startDateMatch = startDate ? expense.createdAt >= startDate : true
  const endDateMatch = endDate ? expense.createdAt <= endDate : true
  const textMatch = expense.description.trim().toLowerCase().includes(text.trim().toLowerCase())

  return startDateMatch && endDateMatch && textMatch
}).sort((a, b) => {
  if (sortBy === 'date') {
    return a.createdAt < b.createdAt ? 1 : -1
  }
  // Only other option is sortBy === 'amount'
  return a.amount < b.amount ? 1 : -1
})


// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 240000, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 500, createdAt: 21000 }))
const expenseThree = store.dispatch(addExpense({ description: 'Food', amount: 1500, createdAt: 500 }))
// store.dispatch(removeExpense(expenseOne.expense.id))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 750 }))

// store.dispatch(setTextFilter('ent'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate())

// store.dispatch(setStartDate(-2000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1000))
// store.dispatch(setEndDate())
