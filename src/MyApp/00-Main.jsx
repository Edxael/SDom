import React from 'react'
import './StyleSheets/Main.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/jquery/dist/jquery'
import { HashRouter, Route, Link } from 'react-router-dom'

// import CKEditor from "react-ckeditor-component"

 
import Home from './01-Home'
import TexEdit from './02-TextEdit'
import Text2 from './03-Text2'
import Hash from './04-Hashing'

export default class extends React.Component{
    render(){
        return(
            <HashRouter>
            <div className="MainContainer">
       
                <div className="menu1">
                    <Link className="menuButton" to="/">Home</Link>
                    <Link className="menuButton" to="/1">TextEdit</Link>
                    <Link className="menuButton" to="/2">Text2</Link>
                    <Link className="menuButton" to="/3">Hash</Link>
                </div>
        
                <hr/>
        
                <Route exact path="/" component={Home}/>
                <Route path="/1" component={TexEdit}/>
                <Route path="/2" component={Text2}/>
                <Route path="/3" component={Hash}/>
       
            </div>
          </HashRouter>
        )
    }
} 

