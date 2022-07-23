import React from 'react'

function Home({ currentUser }) {
  return (
    <div>

        <h1>This is my homepage. Welcome... {currentUser.username}</h1>

    </div>
  )
}

export default Home