import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import MyGroups from './MyGroups'
import CreateNew from './CreateNew'
import About from './About'
import GroupCard from './GroupCard'

function Main({currentUser}) {

    const [ groups, setGroups ] = useState([])
    const [ myGroups, setMyGroups ] = useState([])
    const [ searchInput, setSearchInput ] = useState([])

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

    const renderGroups = groups.filter( g => {
        return (g.topic.toLowerCase().includes(searchInput)) || 
            (g.created_by.toLowerCase().includes(searchInput))})
            .map( g => <GroupCard key={g.id} id={g.id} topic={g.topic} created_by={g.created_by} currentUser={currentUser} userId={g.user_id}/>)

    const renderMyGroups = myGroups.filter( g => {
        return (g.topic.toLowerCase().includes(searchInput)) || 
            (g.created_by.toLowerCase().includes(searchInput))})
            .map( g => <GroupCard key={g.id} id={g.id} topic={g.topic} created_by={g.created_by} currentUser={currentUser} userId={g.user_id}/>)
    
    // // // front-end rendering // // //
    // const renderMyGroups = groups.filter( g => {
    //     return (g.id===currentUser.id)})
    //         .map( g => <GroupCard key={g.id} id={g.id} topic={g.topic} created_by={g.created_by} currentUser={currentUser} userId={g.user_id}/>)
  
    
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
                    <CreateNew currentUser={currentUser} />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Redirect to= "/" />
            </Switch>
        </div>
  )
}

export default Main