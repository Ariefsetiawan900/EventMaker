import React from 'react'
import { Home,AddEvents,Dashboard } from './pages'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/addevent" component={AddEvents} exact/>
        <Route path="/dashboard" component={Dashboard} exact/>
      </Switch>
    </Router>
  )
}

export default App
