import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
// import Home from './Home'

function AuthenticatedApp() {
  return (
    <div>

          <Switch>
                {/* <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/:user">
                    <User />
                </Route>
                <Route>
                    <NoMatch />
                </Route> */}
            </Switch>

    </div>
  )
}

export default AuthenticatedApp