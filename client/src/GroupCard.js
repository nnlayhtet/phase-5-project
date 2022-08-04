import React from 'react'

function GroupCard({ id, topic, created_by, currentUser, creator_id, members, openClick, leaveClick, deleteClick, joinClick}) {

  const member = members.find((m)=>m.id===currentUser.id)

  return (
    <div className="group-card" >
      <div onClick={()=>{member?
                        openClick(id):
                        alert('Please join this group first.')}}>
          <h4 style={{fontWeight: 'bold'}}>{topic.toUpperCase()}</h4>
          <p style={{fontSize: 10, color: 'grey'}}>by: {created_by}</p>
      </div>
          {member?
            <div>
              <button id="open-button" onClick={()=>openClick(id)}>Open</button>            
              {currentUser.id===creator_id?
                <button id="delete-button" onClick={()=> {
                  const confirmBox = window.confirm("Are you sure you want to delete this group? All messages will be deleted. You can't undo this action.")
                  if (confirmBox === true) {
                    deleteClick(id)}}}>Delete Group</button>:
                <button id="leave-button" onClick={()=>leaveClick(id)}>Leave Group</button>}
            </div>:
            <button id="join-button" onClick={()=>joinClick(id)}>Join Group</button>}
    </div>
  )
}

export default GroupCard