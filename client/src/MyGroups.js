import React from 'react'
import Search from './Search'

function MyGroups({ renderMyGroups, setSearchInput}) {
  return (
    <div>
      <h1>My Groups</h1>
      <Search searchInput={setSearchInput}/>
      {renderMyGroups}
    </div>
  )
}

export default MyGroups