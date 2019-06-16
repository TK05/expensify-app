import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" render={props => <LoginPage {...props} />} exact />
          <Route path="/dashboard" render={props => <ExpenseDashboardPage {...props} />} />
          <Route path="/create" render={props => <AddExpensePage {...props} />} />
          <Route path="/edit/:id" render={props => <EditExpensePage {...props} />} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
