import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navigation from './Navigation'
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
  
  // const [currentUser,setCurrentUser] = useState(null)
  // const [authChecked, setAuthChecked] = useState(false)

  // useEffect (()=> {
  //   fetch("/me",{
  //     credentials: 'include'
  //   })
  //   .then(res => {
  //     if (res.ok){
  //       res.json().then((user) => {
  //         setCurrentUser(user)
  //         setAuthChecked(true)
  //       })
  //     } else {
  //       setAuthChecked(true)
  //     }
  //   })
  // },[])

  // if (!authChecked) { return <div> </div> }
  
  return (
    <div>
      <Navigation />
      {/* <Router>
        {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser} />
          )
        } 
      </Router> */}
    </div> 
  )
}

export default App;
