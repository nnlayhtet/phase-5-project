import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Home from './Home'
import MyGroups from './MyGroups'
import CreateNew from './CreateNew'
import About from './About'
import GroupCard from './GroupCard'
import CurrentGroup from './CurrentGroup'


function Main({ currentUser }) {

    const [ groups, setGroups ] = useState([])
    const [ myGroups, setMyGroups ] = useState([])
    const [ searchInput, setSearchInput ] = useState([])
    const history = useHistory()

    useEffect (()=> {
        fetch(`/groups`)
        .then(res => res.json())
        .then(data => setGroups(data))
    },[])

    useEffect (()=> {
        fetch(`/users/:user_id/joined_groups`)
        .then(res => res.json())
        .then(data => setMyGroups(data))
    },[])

    function openClick (group_id) {
        history.push(`/group/${group_id}`)
    }
    
    function leaveClick (group_id) {
        fetch(`/groups/leave/${group_id}`,{
            method: 'DELETE',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                    user_id: currentUser.id,
                    group_id: group_id
                    })

        })
        .then(res=>res.json())
        .then(data=>setGroups(data))
        const updatedMyGroups = myGroups.filter((g) => g.id !== group_id)
        setMyGroups(updatedMyGroups)
    }

    function deleteClick (group_id) {
        fetch(`/groups/${group_id}`,{
            method: 'DELETE'
        })
        const updatedGroups = groups.filter((g) => g.id !== group_id)
        setGroups(updatedGroups)
        const updatedMyGroups = myGroups.filter((g) => g.id !== group_id)
        setMyGroups(updatedMyGroups)
    }

    function joinClick (group_id) {
        fetch(`/groups/join/${group_id}`,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                    user_id: currentUser.id,
                    group_id: group_id
                    })
        })
        .then(res=>res.json())
        .then( joinedGroup => {
            const updatedGroups = groups.filter((g) => g.id !== joinedGroup.id)
            setGroups([...updatedGroups, joinedGroup])
            const updatedMyGroups = myGroups.filter((g) => g.id !== joinedGroup.id)
            setMyGroups([...updatedMyGroups, joinedGroup])
        })
    }

    function handleCreate (newGroup) {
        setGroups([...groups, newGroup])
        setMyGroups([...myGroups, newGroup])
    }

    const renderGroups = groups.filter( g => {
        return (g.topic.toLowerCase().includes(searchInput)) || 
            (g.created_by.toLowerCase().includes(searchInput))}).sort((a, b) => b.id - a.id)
            .map( g => <GroupCard key={g.id} id={g.id} topic={g.topic} created_by={g.created_by} 
                                currentUser={currentUser} creator_id={g.user_id} members={g.members} 
                                openClick={openClick} leaveClick={leaveClick} 
                                deleteClick={deleteClick} joinClick={joinClick}/>)

    const renderMyGroups = myGroups.filter( g => {
        return (g.topic.toLowerCase().includes(searchInput)) || 
            (g.created_by.toLowerCase().includes(searchInput))}).sort((a, b) => b.id - a.id)
            .map( g => <GroupCard key={g.id} id={g.id} topic={g.topic} created_by={g.created_by} 
                                currentUser={currentUser} creator_id={g.user_id} members={g.members} 
                                openClick={openClick} leaveClick={leaveClick} 
                                deleteClick={deleteClick} joinClick={joinClick}/>)
    
        
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home currentUser={currentUser} renderGroups={renderGroups} setSearchInput={setSearchInput}/>
                </Route>
                <Route path="/mygroups">
                    <MyGroups currentUser={currentUser} renderMyGroups={renderMyGroups} setSearchInput={setSearchInput}/>
                </Route>
                <Route path="/createnew">
                    <CreateNew currentUser={currentUser} handleCreate={handleCreate}/>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/group/:id">
                    <CurrentGroup currentUser={currentUser} />
                </Route>
                <Redirect to= "/" />
            </Switch>
        </div>
  )
}

export default Main