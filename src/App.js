import './App.css';
import React, { useState } from 'react';



import Problems from './problems';

function App() {
  var count = 0;
  const [questionList, setQuestionList] = useState([]);
  // const [divideButtonClicked, setDivideButtonClicked] = useState(false);



  
  const [randomVar, setRandomVar] = useState(1); //[name of variable, function to change the value of the variable] = useState(___default value__)
  var prob = ""
  const handleMultiplyClick = () => {
    var E = Math.floor(Math.random()*15+2);
    var G = Math.floor(Math.random()*15+2);
    var question = E+" * "+G+" = "+(E*G);
    setQuestionList([question]);
    // let tempList = questionList;
    // tempList.push(question);
    // setQuestionList(tempList);
  }

  const handleDivideClick = () => {
    var G = Math.floor(Math.random()*9+2);
    var E = Math.floor(Math.random()*9+2);
    var T = E*G
    var question = T+ " / "+G+" = "+ E;
    setQuestionList([question]);
  }
  return (
<div>
      <header className="App-header">
        <Problems questionList={questionList} />
        <button onClick= {() => {handleMultiplyClick();}}>Multiply Problem</button>
        <button onClick= {() => {handleDivideClick();}}>Divide Problem</button>



      
      </header>
    </div>
  )
}

export default App

