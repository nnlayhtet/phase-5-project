import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <div >
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default UnauthenticatedApp