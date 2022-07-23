import React from 'react'

function Search({ searchInput }) {
  return (
    <div>        
        <form>
          <label>Search..</label>
          <input
            onChange={(e)=>(searchInput(e.target.value.toLowerCase()))}
            placeholder='title or created by'/>
          {/* <button>Submit</button> */}
        </form>
    </div>
  )
}

export default Search