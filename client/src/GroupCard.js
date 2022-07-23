import React from 'react'
import Home from './Home'

function GroupCard({ id, topic, created_by, currentUser, userId}) {
  return (
    <div className="group-card">
        <h2>Title: {topic}</h2>
        <h3>Created By: {created_by}</h3>
        {currentUser.id===userId?<button>Leave Group</button>:<button>Join Group</button>}
    </div>
  )
}

export default GroupCard