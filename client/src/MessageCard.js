import React from 'react'

function MessageCard({ id, content, time, sender_name, currentUser }) {
  return (
    <div >
        <p id="time-display">{time}</p>
        <div className={sender_name===currentUser.username?"message-sender":"message-receiver"}>
          <div>
            <p id="name">{sender_name===currentUser.username?"Me":sender_name}:</p> 
            <p id="content">{content}</p>
          </div>
        </div>
        <br/>
    </div>
  )
}

export default MessageCard