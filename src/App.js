import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



import Problems from './problems';

function App() {
  var count = 0;
  const [multiplyButtonClicked, setMultiplyButtonClicked] = useState(false);


  
  const [randomVar, setRandomVar] = useState(1); //[name of variable, function to change the value of the variable] = useState(___default value__)
  const handleClick = () => {
    setRandomVar(randomVar + 1);
    setMultiplyButtonClicked(true);
  }
  return (
<div>
      <header className="App-header" style={{ backgroundColor: randomVar === 5 ? 'red' : 'purple' }}>
        {multiplyButtonClicked === true ? Problems.probType="Multiply" : null};
        <button onClick= {() => {handleClick();}}>Multiply Problem</button>


        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
