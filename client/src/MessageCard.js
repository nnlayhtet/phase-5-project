import React from 'react'

function MessageCard({ id, content, time, sender_name, currentUser }) {
  return (
    <div >
        <p id="time-display">{time}</p>
        <div className={sender_name===currentUser.username?"message-sender":"message-receiver"}>
          <p>{sender_name}: {content}</p>
        </div>
        <br/>
    </div>
  )
}

export default MessageCard