
// Main Location:
// https://docs.ckeditor.com/ckeditor4/latest/guide/dev_package_managers.html

// Instance: 
// https://docs.ckeditor.com/ckeditor4/latest/guide/dev_framed.html

// ====================================================================================



import React from 'react';
// import CKEd from '../../node_modules/ckeditor/ckeditor'
 
export default class extends React.Component {
  render() {
    return(
      <div>
        <div>CKEditor</div>
        <p>This is for the edditor provided by Light.</p>
        <br/>

        <script src="../../node_modules/ckeditor/ckeditor"/>

        "<p>Hello World</p>"

      </div>
    )
  }
}


// <script src="/ckeditor/ckeditor.js"/>