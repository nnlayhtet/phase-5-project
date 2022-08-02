import React, { useState, useEffect, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ActionCableContext } from './index.js'
import MessageCard from './MessageCard'

function CurrentGroup({ currentUser }) {
    
    const [ messages, setMessages ] = useState([])
    const [ currentGroup, setCurrentGroup ] = useState([])
    const [ content, setContent ] = useState([])
    // const [ channel, setChannel ] = useState(null)
    let { id } = useParams()
    const cable = useContext(ActionCableContext)
    const bottomRef = useRef(null)
    
    useEffect (()=> {
        fetch(`/groups/${id}`)
        .then(res => res.json())
        .then(data => {
            setCurrentGroup(data)
        })
    },[id])
    
    useEffect (()=> {
        fetch(`/groups/${id}/messages`)
        .then(res => res.json())
        .then(data => setMessages(data))
    },[id])
   
    useEffect(() => {
        // const channel = cable.subscriptions.create(
        cable.subscriptions.create(
            {
                channel: 'GroupChannel',
                id: id,
            },
            {
                received: (data) => {
                fetch(`/groups/${id}/messages`)
                .then(res => res.json())
                .then(data => setMessages(data))
            },
            }
        )
        // setChannel(channel)
        return () => {
            // channel.unsubscribe()
        }
    },[cable.subscriptions, id])

    useEffect(() => {
    // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'auto'});
    }, [messages]);

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/messages`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            Accept: "application/json",
        },
        body: JSON.stringify({
                            content: content,
                            group_id: id,
                            user_id: currentUser.id
                            })
        })
        setContent("")
    }

    function msgDeleteClick(message_id){
        // console.log(message_id)
        fetch(`/messages/${message_id}`,{
        method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => setMessages(data))
    }

    function msgEditClick(message_id){
        // console.log(message_id)
    }

    const renderMessages = messages.map((m)=><MessageCard key={m.id} id={m.id} content={m.content} time={m.time} sender_name={m.sender_name} currentUser={currentUser} msgDeleteClick={msgDeleteClick} msgEditClick={msgEditClick}/>)
    const renderMemberList = (currentGroup.members)? (currentGroup.members.map((m)=>m.username).join(', ')):null

    return (
        <div >
            <p>Group: {currentGroup.topic}</p>
            <p>Members: {renderMemberList}</p>
            <div id="chat-box" >
                {renderMessages}
                <p id="end-of-chat">end of messages</p>
                <div ref={bottomRef}/>
            </div>    
            <form onSubmit={handleSubmit}>
                {/* <label >{currentUser.username} : </label> */}
                <textarea
                    className="new-message-box"
                    required
                    placeholder="New Message"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    onKeyPress={(e) => (e.key === 'Enter'?handleSubmit(e):null)}
                    />
                <button type="submit" className="icon-show-submit">Send</button>
            </form>
        </div>
    )
}

export default CurrentGroup