import React from 'react'
import { Switch, Route, Redirect, useHistory} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'

function AuthenticatedApp({currentUser, setCurrentUser}) {
    
    const history = useHistory()

    const handleLogout = () => {
        fetch(`/logout`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(res => {
            if (res.ok){
                setCurrentUser(null)
                history.push('/')
            }
        })
    }

    return (
        <div>
            <Navigation
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
                handleLogout={handleLogout}/>
            <Switch>
                <Route exact path="/">
                    <Home currentUser={currentUser}/>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                {/* <Route path="/:user">
                    <User />
                </Route>
                <Route>
                    <NoMatch />
                </Route> */}
                <Redirect to= "/" />
            </Switch>
        </div>
    )
}

export default AuthenticatedApp