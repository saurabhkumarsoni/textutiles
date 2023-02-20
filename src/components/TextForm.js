import React, { useState } from 'react'

export default function TextForm(props) {
    console.log(props)
    const convertToUppercase = () =>{
        let newText  = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    }

    const changeTheText =(event)=>{
        setText(event.target.value);
    }

    const convertToLowercase =() =>{
        setText(text.toLowerCase());
        props.showAlert('Converted to LowerCase', 'success');

    }

    const clearText =() =>{
        let newText = ''
        setText(newText);
        props.showAlert('Your text is cleared', 'success');

    }

    const copyText = ()=>{
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied your text', 'success');

    }

    const removeExtraSpace = ()=>{
        const newText =text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Removed your text', 'success');

    }
    const [text, setText] = useState('')
  return (
    <>
    <div className='container'>   
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={changeTheText} style={{backgroundColor: props?.mode === 'dark'? 'gray': 'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={convertToUppercase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={convertToLowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#04743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "enter text above for the preview"}</p>
    </div>
    </>
  )
}
