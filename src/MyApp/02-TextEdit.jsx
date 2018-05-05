import React from 'react'
import CKEditor from "react-ckeditor-component"  // https://www.npmjs.com/package/react-ckeditor-component


 
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: '',
        }
    }
 
    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }
    
    onChange(evt){
      console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
    }
    
    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }



    render() {

        const printToConsole = () => {
            console.log(this.state.content)
        }

        return(
            <div>
                <h1>Text Editor</h1>
                
                <CKEditor 
                activeClass="p10" 
                content={this.state.content} 
                events={{
                    "blur": this.onBlur,
                    "afterPaste": this.afterPaste,
                    "change": this.onChange
                }}
                />

                <br/>

                <button className="gralButton" >Print Text</button>
            </div>
        )
    }
}