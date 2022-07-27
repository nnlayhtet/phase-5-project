import React, {useState} from 'react'

function CreateNew({ currentUser, handleCreate }) {

  const [ topic, setTopic ] = useState('')
  const [ status, setStatus ] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/groups`,{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        topic: topic,
        created_by: currentUser.username,
        user_id: currentUser.id
      })
    })
    .then(res => {
      if (res.ok){
        res.json().then(newGroup => { 
                                setTopic("")
                                setStatus("New group created.")
                                handleCreate(newGroup)})
      } else {res.json().then(e => setStatus(e.errors))}
    })
  }
  

  return (
    <div>
      
      <h3>Create A New Group</h3>
      <form onSubmit={handleSubmit}>
        <label>Topic:</label>
        <input
          required
          value={topic}
          onChange={(e)=>setTopic(e.target.value)}
          />
        <button type="submit">Submit</button>
      </form>
      <p>{status}</p>
      
    </div>
  )
}

export default CreateNew