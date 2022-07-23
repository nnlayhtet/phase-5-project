import React, { useState, useEffect } from 'react'
import Search from './Search'

function Home({ currentUser, renderGroups, setSearchInput }) {
  
  return (
    <div>
        <h1>This is my homepage. Welcome... {currentUser.username.toUpperCase()}</h1>
        <Search searchInput={setSearchInput}/>
        {renderGroups}
    </div>
  )
}

export default Home