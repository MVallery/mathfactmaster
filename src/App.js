import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



import Problems from './problems';

function App() {
  var count = 0;
  const [multiplyButtonClicked, setMultiplyButtonClicked] = useState(false);


  
  const [randomVar, setRandomVar] = useState(1); //[name of variable, function to change the value of the variable] = useState(___default value__)
  var prob = ""
  const handleClick = () => {
    setRandomVar(randomVar + 1);
    setMultiplyButtonClicked(true);
    console.log("Button is clicked")
  }
  return (
<div>
      <header className="App-header">
        {multiplyButtonClicked === true ? prob = "Multiply" : null};


        <Problems probType={prob} randomFunction={() => {console.log("This is the button for multiplying");}}/>
        <button onClick= {() => {handleClick();}}>Multiply Problem</button>


      
      </header>
    </div>
  );
}

export default App

