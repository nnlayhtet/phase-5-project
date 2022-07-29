import React, { useEffect } from 'react'
import Search from './Search'

function Home({ currentUser, renderGroups, setSearchInput }) {
  useEffect(()=>setSearchInput(''),[])
  return (
    <div>
        <h4>Welcome... {currentUser.username.toUpperCase()}. Join groups to start chatting.</h4>
        <Search searchInput={setSearchInput}/>
        {renderGroups}
    </div>
  )
}

export default Home