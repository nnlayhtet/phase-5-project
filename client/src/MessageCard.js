import React from 'react'

function MessageCard({ id, content, time, sender_name, currentUser }) {
  return (
    <div >
        <p id="time-display">{time}</p>
        <div className={sender_name===currentUser.username?"message-sender":"message-receiver"}>
            <label id="name">{sender_name===currentUser.username?"Me":sender_name}:</label> 
            <p id="content">{content}</p>
        </div>
        <br/>
    </div>
  )
}

export default MessageCard