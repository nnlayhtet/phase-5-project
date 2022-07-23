import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation({setCurrentUser, currentUser, handleLogout}) {

  return (
    <div id="nav-div">
        <h1 id="app-title">Title Title Title</h1>
        {currentUser?
          <nav id="nav-bar">
            <NavLink className="nav-button" activeClassName="n-active" exact to="/">Home</NavLink>
            <NavLink className="nav-button" activeClassName="n-active" to="/page1">page1</NavLink>
            <NavLink className="nav-button" activeClassName="n-active" to="/page2">page2</NavLink>
            <NavLink className="nav-button" activeClassName="n-active" to="/about">About</NavLink>
            <button id="logout-button" onClick={handleLogout}>Log Out</button>
          </nav>:null}
    </div>
  );
}

export default Navigation