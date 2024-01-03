import React, {useState} from 'react'



export default function TextForm(props) {
    
    const handleUPClick =()=>{
        console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleDownClick =()=>{
        console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearClick =()=>{
     
        let newText="";
        setText(newText)
    }

    const handleCopyClick =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleRemoveClick =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange =(event)=>{
        console.log("uppercase was clicked");
        setText(event.target.value);
    }
    

    const [text, setText] = useState('Enter text here');
    // setText used for change the State ! text (wrong)
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">  
               <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>
        <button className="btn btn-primary mx-1" onClick={handleUPClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowe case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the text box</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy the text </button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveClick}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>
            {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>
            {0.008 * text.split(" ").length} Minutes read
        </p>
        <h2>
            Preview
        </h2>
        <p>
            {text}
        </p>

    </div>
    </>
  )
}
