import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup({setCurrentUser}) {

//  const history = useHistory()
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [passwordConfirmation, setPasswordConfirmation] = useState('')
 const [displayError, setDisplayError] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
  fetch('/signup', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      username,
      password,
      password_confirmation: passwordConfirmation
    })
  }) 
    .then(res => {
      if (res.ok) {
      res.json().then(user => {
        setCurrentUser(user)
        // history.push('/signup')
      })
      } else {
        res.json().then(e => {
          setDisplayError(e.errors.join(", "))
        })
      }
    })
 }
  return (
    <div className="login-signup">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>Username</label>		
        <input 
            required
            type="text" 
            name="username"
            value={username}
            onChange={(e) => {
            setDisplayError("")
            setUsername(e.target.value)}}/>
        <br/>
        <label>Password</label>
        <input
            required
            type="password" 
            name=""
            value={password}
            onChange={(e)=> {
            setDisplayError("")
            setPassword(e.target.value)}}/>
        <br/>
        <label>Password Confirmation</label>
        <input 
            required
            type="password" 
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e)=> {
              setDisplayError("")
              setPasswordConfirmation(e.target.value)}}/>
        <p>{displayError}</p>
        <button type="submit">Sign Up</button>
        <p>-- or --</p>
        <Link type="submit" to="/login">Log In</Link>
        <p>Please Log In or Sign Up</p>
      </form>
    </div>
  )
}

export default Signup