import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login({setCurrentUser}) {

  const [ displayError, setDisplayError] = useState('')
  
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    setDisplayError('')
    const {name, value} = e.target
    setFormData((formData) => ({...formData,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
        })
      } else {
        res.json().then(e => {
          setDisplayError(e.errors)
        })
      }
    })
  }

  return (
    <div className="login-signup">
        <form onSubmit={handleSubmit}> 
            <h2>Log In</h2>            
            <label>Username</label>		
            <input 
                required
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}/>
            <br/>
            <label>Password</label>
            <input 
                required
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}/>
            <p>{displayError}</p>
            <button to="/home">Log In</button>
            <p>-- or --</p>
            <Link type="submit" to="/signup">Sign Up</Link>
            <p>Please Log In or Sign Up</p>
        </form>
    </div>
  );
}

export default Login