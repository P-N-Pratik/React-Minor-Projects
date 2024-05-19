import React, { useState } from "react";



function TextForm(props) 
{

  const handleUpClick = () => 
  {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Conerted to upperCase ","success");
  };

  const handleLoClick = () => 
  {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Conerted to lowerCase ","success");
  };

  const handleClearClick = () => 
  {
    let newText = " " ;
    setText(newText);
    props.alert("cleared ","success");
  };

  const handleOnChange = (event) => 
  {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the Text here : ");

  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white' , backGroundColor:props.mode==='light'? '#1e184f':'white'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3" >
          <textarea
            class="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==='light'?'black':'white' , backGroundColor:props.mode==='light'? '#1e184f':'white'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Perview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
