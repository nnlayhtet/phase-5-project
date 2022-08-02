import React, { useEffect } from 'react'
import Search from './Search'

function MyGroups({ renderMyGroups, setSearchInput}) {
  useEffect(()=>setSearchInput(''),[])
  return (
    <div>
      <h4>My Groups</h4>
      <Search searchInput={setSearchInput}/>
      {renderMyGroups}
    </div>
  )
}

export default MyGroups