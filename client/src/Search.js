import React from 'react'

function Search({ searchInput }) {
  return (
    <div>        
        <form>
          <label>Search..</label>
          <input
            onChange={(e)=>(searchInput(e.target.value.toLowerCase()))}
            placeholder='Topic..., Created By...'/>
          {/* <button>Submit</button> */}
        </form>
    </div>
  )
}

export default Search