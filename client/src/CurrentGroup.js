import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MessageCard from './MessageCard'

function CurrentGroup({ currentUser }) {

    const [ messages, setMessages ] = useState([])
    const [ currentGroup, setCurrentGroup ] = useState([])
    const [ content, setContent ] = useState([])

    let { id } = useParams();

    useEffect (()=> {
        fetch(`/groups/${id}`)
        .then(res => res.json())
        .then(data => {
            setCurrentGroup(data)
        })
    },[])
    
    useEffect (()=> {
        fetch(`/groups/${id}/messages`)
        .then(res => res.json())
        .then(data => setMessages(data))
    },[])

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/messages`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
                            content: content,
                            group_id: id,
                            user_id: currentUser.id
                            })
        })
        setContent("")
    }

    const renderMessages = messages.map((m)=><MessageCard key={m.id} id={m.id} content={m.content} time={m.time} sender_name={m.sender_name} currentUser={currentUser}/>)
    const renderMemberList = (currentGroup.members)? (currentGroup.members.map((m)=>m.username).join(', ')):null
    // const renderMemberList = (currentGroup.members)? (currentGroup.members.map((m)=><MemberCard key={m.id} id={m.id} username={m.username}/>)):null

    return (
        <div>
            <h3>Current Group: {currentGroup.topic}</h3>
            <h4>Members: {renderMemberList}</h4>
            <div id="room">
            {renderMessages}
            <form onSubmit={handleSubmit}>
                <input
                    required
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            
            </div>    
        </div>
    )
}

export default CurrentGroup
    
    
    
    
    
    
    
    
    

