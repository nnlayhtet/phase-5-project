import React, { useState } from 'react'

function MessageCard({ id, content, time, sender_name, currentUser, msgDeleteClick, msgEditSubmit}) {

  const [ showForm, setShowForm ] = useState(false)
  let sender = sender_name===currentUser.username ? true : false

  return (
    <div>
        <p id="time-display">{time}</p>
        <div className={sender?"message-sender":"message-receiver"}>
        <div className="edit-delete-messages">
          <label style={{margin:"auto"}} id="name">{sender?"Me":sender_name}:</label> 
          <button className={sender?"icon-show-edit":"icon-hide"} onClick={()=>setShowForm(!showForm)}>✏️</button>
          <button className={sender?"icon-show-delete":"icon-hide"} onClick={()=>msgDeleteClick(id)}>x</button>
        </div>
            <p id="content">{content}</p>
        {showForm && (
        <form onSubmit={(e)=>{
                              msgEditSubmit(e,id)
                              setShowForm(!showForm)}}>
          <input
            type="text"
            placeholder={content}
          />
          <button type="submit">Submit</button>
        </form>)}
        </div>
        {/* <br/> */}
    </div>
  )
}

export default MessageCard