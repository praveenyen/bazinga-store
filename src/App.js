import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/orders" component={HomePage} />
      <Route path="/:id" component={OrderPage} />
    </Switch>
  )
}