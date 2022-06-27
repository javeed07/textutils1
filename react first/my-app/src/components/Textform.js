import React,{useState} from 'react'







export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!" , "success")
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!" , "success")
    }
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("text cleared!" , "success")
        
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy =() => {
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied" , "success")
       
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed extra spaces" , "success")
    }
    const[text, setText]=useState('');
   
   
  return (
     <>
 <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
 <h2>{props.heading}</h2>
  <div className="mb-3">
    <textarea className="form-control text-dark" value={text} onChange={handleOnChange}
     style={{backgroundColor: props.mode==='dark'?'gray':'white' ,color:props.mode==='dark'?'white':'#042743'}}
      id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>convert to uppercase</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>convert to lowercase</button>
   <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>clear Text</button>
  <button className="btn btn-success mx-2 my-1" onClick={handleCopy}>copy Text</button>
  <button className="btn btn-warning mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").filter((element)=>{return element,length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
  </div>
     </>
  )
}
