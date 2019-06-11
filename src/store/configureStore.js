import { createStore, combineReducers } from 'redux'

import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'


// Create Redux store & combine expenses and filters reducer
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
