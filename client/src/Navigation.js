import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation({setCurrentUser, currentUser,handleLogout}) {

  // const [navbarOpen, setNavbarOpen] = useState(false)


  return (
    // <nav className="flex items-center justify-between text-2xl border-black border-b-2 pb-2 mb-4">
    //   <div className="flex flex-col">
        
    //     <h1>To Do App <button  className="todo-button logout" onClick={handleLogout}> <span id="circle"></span>      Log Out</button></h1>
    //     <h1>Welcome! {currentUser.username}</h1>
    //     {/* <button className="text-right" onClick={() => setNavbarOpen(!navbarOpen)}></button>
    //     <div className="relative w-52">
    //       <div className={`flex flex-col w-52 bg-white shadow overflow-hidden absolute space-y-3 text-lg ${navbarOpen ? 'p-4 max-h-screen' : 'p-0 max-h-0'}`}>
    //         <hr/>
    //       </div>
    //     </div> */}
        
    //   </div>
    // </nav>
    <div id="nav-bar">
        <h1>Title Title Title</h1>
        <nav>
            <NavLink className="nav-button" exact to="/">Home</NavLink>
            <NavLink className="nav-button" to="/page1">page1</NavLink>
            <NavLink className="nav-button" to="/page2">page2</NavLink>
            <NavLink className="nav-button" to="/page3">page3</NavLink>
        </nav>
    </div>
  );
}

export default Navigation