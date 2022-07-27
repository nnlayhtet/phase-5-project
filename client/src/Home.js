import React, { useState, useEffect } from 'react'
import Search from './Search'

function Home({ currentUser, renderGroups, setSearchInput }) {
  useEffect(()=>setSearchInput(''),[])
  return (
    <div>
        <h3>Welcome... {currentUser.username.toUpperCase()}. Join groups to start chatting.</h3>
        <Search searchInput={setSearchInput}/>
        {renderGroups}
    </div>
  )
}

export default Home