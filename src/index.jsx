import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import './firebase/firebase'
import './styles/styles.scss'


const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
