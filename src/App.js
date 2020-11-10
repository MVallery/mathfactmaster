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
    console.log("Hello")
    var E = Math.floor(Math.random()*15+2);
    var G = Math.floor(Math.random()*15+2);
    var question = E+" * "+G+" = "+(E*G) + " ";
    let tempList = questionList;
    tempList.push(question);
    setQuestionList([tempList]);
    // setQuestionList([question]);
    
    // setQuestionList(concat[question])
    // setQuestionList = question
    // setQuestionList([]).concat([question])
    // setQuestionList(questionList.concat[question]);
    // setQuestionList(questionList.concat(question))
    // questionList.push(question)
  }
    // for (i=1; i<10; i++) {}
    // let tempList = questionList;
    // tempList.push(question);
    // setQuestionList(tempList);
  
  const handleDivideClick = () => {
    var G = Math.floor(Math.random()*9+2);
    var E = Math.floor(Math.random()*9+2);
    var T = E*G
    var question = T+ " / "+G+" = "+ E + " ";
    let tempList = questionList;
    tempList.push(question);
    setQuestionList([tempList]);
  }

  const handleMultiplyDivideClick = () => {
    setQuestionList(["no multdiv yet"])
  }

  // const handleClick = (prob, q) => {
  //   for  (i=1; i<=q; i++){
  //     if (prob = "divide") {
  //       handleDivideClick();
  //     }
  //     else if (prob = "multiply") {
  //       handleMultiplyClick();
  //     }
  //     else if (prob = "multiplyDivide") {
  //       handleMultiplyDivideClick();
  //     }
  //     else {console.log("no selection")};
  // }}

  return (
<div>
      <header className="App-header">
        <Problems questionList={questionList} />
        <button onClick= {() => {handleMultiplyClick();}}>Multiply Problem</button>
        <button onClick= {() => {handleDivideClick();}}>Divide Problem</button>

        {/* <form><p><label><input type="checkbox" name="multiply" onChange={handleMultiplyClick}/>Multiply</label></p></form> */}
      </header>
    </div>
  )
}

export default App

