import React from 'react'
import ReactDOM from 'react-dom'
import './StyleSheets/Main.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery'
import { HashRouter, Route, Link } from 'react-router-dom'

import CKEditor from "react-ckeditor-component"

 
import Home from './01-Home'
import TexEdit from './02-TextEdit'
import Graphs from './03-Graphs'

export default class extends React.Component{
    render(){
        return(
            <HashRouter>
            <div className="MainContainer">
       
                <div className="menu1">
                    <Link className="menuButton" to="/">Home</Link>
                    <Link className="menuButton" to="/1">TextEdit</Link>
                    <Link className="menuButton" to="/2">Graphs</Link>
                </div>
        
                <hr/>
        
                <Route exact path="/" component={Home}/>
                <Route path="/1" component={TexEdit}/>
                <Route path="/2" component={Graphs}/>
       
            </div>
          </HashRouter>
        )
    }
} 
