import React, { useState, useEffect, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ActionCableContext } from '.'
import MessageCard from './MessageCard'
// import { ActionCable } from 'actioncable'

function CurrentGroup({ currentUser }) {
    
    const [ messages, setMessages ] = useState([])
    const [ currentGroup, setCurrentGroup ] = useState([])
    const [ content, setContent ] = useState([])
    const [ channel, setChannel ] = useState(null)
    let { id } = useParams()
    const cable = useContext(ActionCableContext)
    const bottomRef = useRef(null)
    
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
   
    useEffect(() => {
        const channel = cable.subscriptions.create(
            {
                channel: 'GroupChannel',
                id: id,
                // group: window.location.href.match(/\d+$/)[0],
            },
            {
                received: (data) => {
                fetch(`/groups/${id}/messages`)
                .then(res => res.json())
                .then(data => setMessages(data))
                // bottomRef.current?.scrollIntoView({behavior: 'smooth'})
            },
            }
        )
        // setChannel(channel)
        return () => {
            // channel.unsubscribe()
        }
    }, [])

    useEffect(() => {
    // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'auto'});
    }, [messages]);



    // const sendMessage = (content) => {
    //     channel.send(content)
    // }


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
        // sendMessage({
        //                     content: content,
        //                     group_id: id,
        //                     user_id: currentUser.id
        //                     })
        setContent("")
    }

    const renderMessages = messages.map((m)=><MessageCard key={m.id} id={m.id} content={m.content} time={m.time} sender_name={m.sender_name} currentUser={currentUser}/>)
    const renderMemberList = (currentGroup.members)? (currentGroup.members.map((m)=>m.username).join(', ')):null

    // function handleReceivedMessage(message) {
    //     setMessages([...messages, message])
    // }
    
    return (
        <div >
            <h3>Current Group: {currentGroup.topic}</h3>
            <h4>Current Members: {renderMemberList}</h4>
            <div id="chat-box" >
            {/* <ActionCable 
                channel={{ channel: 'MessagesChannel' }}
                onReceived={handleReceivedMessage}
            /> */}
            {renderMessages}
            <p id="end-of-chat">end of messages</p>
            <div ref={bottomRef}/>
            </div>    
            <form onSubmit={handleSubmit}>
                <label>{currentUser.username} : </label>
                <input
                    required
                    placeholder="New Message"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
                <button type="submit" >Send</button>
            </form>

        </div>
    )
}

export default CurrentGroup



// import React from 'react';
// import { ActionCable } from 'actioncable';

// class CurrentGroup extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       messages: []
//     }
//     this.cable = ActionCable.createConsumer('ws://localhost:3000/cable')
//   }

//   componentDidMount() {
//     this.fetch
//     this.createSubscription()
//   };

//   fetchMessages = () => {
//     fetch('http://localhost:3000/messages')
//       .then(res => res.json())
//       .then(messages => this.setState({ messages: messages }))
//   }

//   createSubscription = () => {
//     this.cable.subscriptions.create(
//       { channel: 'MessagesChannel' },
//       { received: message => this.handleReceivedMessage(message) }
//     )
//   }

//   mapMessages = () => {
//     return this.state.messages.map((message, i) => 
//       <li key={i}>{message.content}</li>)
//   }

//   handleReceivedMessage = message => {
//     this.setState({ messages: [...this.state.messages, message] })
//   }

//   handleMessageSubmit = e => {
//     e.preventDefault();
//     const messageObj = {
//       message: {
//         content: e.target.message.value
//       }
//     }
//     const fetchObj = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(messageObj)
//     }
//     fetch('http://localhost:3000/messages', fetchObj)
//     e.target.reset()
//   }

//   render() {
//     return (
//       <div className='App'>
//         <ActionCable 
//           channel={{ channel: 'MessagesChannel' }}
//           onReceived={this.handleReceivedMessages}
//         />
//         <h2>Messages</h2>
//         <ul>{this.mapMessages()}</ul>
//         <form>
//           <input name='message' type='text' />
//           <input type='submit' value='Send message' />
//         </form>
//       </div>
//     );
//   }
// }
// export default CurrentGroup;
    
    
    
    
    
    
    
    
    

