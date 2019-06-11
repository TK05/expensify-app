import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import './styles/styles.scss'

import { addExpense } from './actions/expenses'


const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas Bill' }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
