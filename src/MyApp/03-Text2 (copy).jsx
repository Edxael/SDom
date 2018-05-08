
import React from 'react'
import CKEditor from "react-ckeditor-component"     // https://www.npmjs.com/package/react-ckeditor-component
var ReactDOMServer = require('react-dom/server')    // https://www.npmjs.com/package/html-to-react
var HtmlToReactParser = require('html-to-react').Parser

 
export default class extends React.Component {
    state = { content: 'Type here..' }
  
    updateContent(newContent) {
        this.setState({ content: newContent })
    }
    
    onChange(evt){
        var newContent = evt.editor.getData()
        console.log("Lo escrito: ", newContent)
        this.setState({ content: newContent })
    }

  render() {

      const newHTML = () => {
        const textOut = { textAlign: "left", backgroundColor: "rgb(230, 249, 252)", padding: "15px", border: "1px solid black" }
        var htmlToReactParser = new HtmlToReactParser();
        var MyReactElement = htmlToReactParser.parse(this.state.content)
        return  <div style={ textOut } >{ MyReactElement }</div>
      }

    return(
      <div>
        <h1>Text Editor</h1>
                
          <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              events={{
                  "change": this.onChange.bind(this)
              }}
          />

          <br/>
          <hr/>
          <br/>

              { React.createElement(newHTML) }

      </div>
    )
  }
}

