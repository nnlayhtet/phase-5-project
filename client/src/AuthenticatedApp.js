import React from 'react'
import Navigation from './Navigation'
import {useHistory} from 'react-router-dom'
import Main from './Main'

function AuthenticatedApp({currentUser, setCurrentUser, cableApp}) {
    
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
            <Main currentUser={currentUser} cableApp={cableApp}/>
        </div>
    )
}

export default AuthenticatedApp