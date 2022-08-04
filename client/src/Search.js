import React from 'react'

function Search({ searchInput }) {
  return (
    <div>        
        <form>
          <label>Search</label>
          <input style={{height: 50, width: 300, marginBottom: 15, border: '1px solid', marginLeft: 20,borderRadius: 50, padding: 5, backgroundColor: 'rgb(250, 247, 247)'}}
            onChange={(e)=>(searchInput(e.target.value.toLowerCase()))}
            placeholder='     Topics, Created By'/>
          {/* <button>Submit</button> */}
        </form>
    </div>
  )
}

export default Search