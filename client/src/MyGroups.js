import React, { useEffect } from 'react'
import Search from './Search'

function MyGroups({ renderMyGroups, setSearchInput}) {
  useEffect(()=>setSearchInput(''),[])
  return (
    <div>
      <h3>My Groups</h3>
      <Search searchInput={setSearchInput}/>
      {renderMyGroups}
    </div>
  )
}

export default MyGroups