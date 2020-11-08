import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



import Problems from './problems';

function App() {
  var count = 0;
  const [randomVar, setRandomVar] = useState(1); //[name of variable, function to change the value of the variable] = useState(___default value__)
  const handleClick = () => {
    setRandomVar(randomVar + 1);
  }
  return (
    <div className="App" onClick={() => {
      handleClick();
    }}>
      <header className="App-header" style={{ backgroundColor: randomVar === 5 ? 'red' : 'purple' }}>
        <img src={logo} className="App-logo" alt="logo" />
        { randomVar === 4 ? (
                  <p>
                  Edit <code>src/App.js</code> {count} and save to reload.
                </p>
        ) : null}
        <Problems probType= {"Multiply"} probLevel= {"Hard"} />
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
