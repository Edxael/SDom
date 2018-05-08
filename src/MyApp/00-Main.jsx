import React from 'react'
import './StyleSheets/Main.css'
import { HashRouter, Route, Link } from 'react-router-dom'

 
import Home from './01-Home'
import WIP from './02-WIP'
import Hash from './03-Hashing'

export default class extends React.Component{
    render(){
        return(
            <HashRouter>
            <div className="MainContainer">
       
                <div className="menu1">
                    <Link className="menuButton" to="/">Home</Link>
                    <Link className="menuButton" to="/2">WIP</Link>
                    <Link className="menuButton" to="/3">Hash</Link>
                </div>
        
                <hr/>
        
                <Route exact path="/" component={Home}/>
                <Route path="/2" component={WIP}/>
                <Route path="/3" component={Hash}/>

                <hr/>
                <p>By: Edmundo Rubio.</p>
       
            </div>
          </HashRouter>
        )
    }
} 


