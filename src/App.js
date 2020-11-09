import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



import Problems from './problems';

function App() {
  var count = 0;
  const [multiplyButtonClicked, setMultiplyButtonClicked] = useState(false);
  const [divideButtonClicked, setDivideButtonClicked] = useState(false);



  
  const [randomVar, setRandomVar] = useState(1); //[name of variable, function to change the value of the variable] = useState(___default value__)
  var prob = ""
  const handleMultiplyClick = () => {
    setMultiplyButtonClicked(true);
    // setDivideButtonClicked(false);
    console.log("Multiply Button is clicked")

  }
  const handleDivideClick = () => {
    setDivideButtonClicked(true);
    // setMultiplyButtonClicked(false);
    console.log("DivideButton is clicked")
  }
  return (
<div>
      <header className="App-header">
        {multiplyButtonClicked === true ? prob = "Multiply" : null};


        <Problems probType={prob} randomFunction={() => {console.log("This is the button for multiplying");}}/>
        <button onClick= {() => {handleMultiplyClick();}}>Multiply Problem</button>
        <button onClick= {() => {handleDivideClick();}}>Multiply Problem</button>



      
      </header>
    </div>
  );
}

export default App

