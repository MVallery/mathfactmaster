import './App.css';
import React, { useState } from 'react';
import Problems from './problems';

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [inputAnswer, setInputAnswer] = useState("")
  const [message, setMessage] = useState("")
  const [questionType, setQuestionType] = useState("multiply")
  const [autoFocus, setAutoFocus] = useState("autoFocus")
  const handleMultiplyClick = () => {
    var E = Math.floor(Math.random()*9+2);
    var G = Math.floor(Math.random()*9+2);
    var answer = E*G
    var question = E+" * "+G+" = ";
    // let tempList = questionList;
    // tempList.push(question);
    setQuestionList([question]);
    setCorrectAnswer([answer])
    setQuestionType("multiply")
    console.log(questionType)
    // setAutoFocus(["autoFocus"])
  }

  const handleDivideClick = () => {
    var G = Math.floor(Math.random()*9+2);
    var answer = Math.floor(Math.random()*9+2);
    var T = answer*G
    var question = T+ " / "+G+" = ";
    // let tempList = questionList;
    // tempList.push(question);
    setQuestionList([question]);
    setCorrectAnswer([answer])
    setQuestionType("divide")
    // setAutoFocus(["autoFocus"])

  }
  const handleInputAnswer = (e) => {
    setInputAnswer(e.target.value)
    console.log(inputAnswer)
    console.log(message)
  }
const handleSubmitAnswer = (e) => {
  e.preventDefault();
 
  var goodMessages = ["Great job", "Awesome!", "Wow keep it up!", "You got it!!"]
  var randomMessage = goodMessages[Math.floor(Math.random()*goodMessages.length)]
  if (inputAnswer === String(correctAnswer)) {
    setMessage(randomMessage)
    console.log(randomMessage)
    
  }
  else {
    setMessage("Uh oh try again! The right answer was " + correctAnswer)
  }

  setInputAnswer("")
  setTimeout(() => {setMessage ("")}, 3000)
  console.log(questionType)
  if (questionType === "multiply") {
    handleMultiplyClick()
  }
  else {
    handleDivideClick()
  }
}
const keypress = (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    handleSubmitAnswer(e);
  }
}

  return (
<div className="Giant-container">
<div className="container">
        <button onClick= {() => {handleMultiplyClick();}}>Multiply Problem</button>
        <button onClick= {() => {handleDivideClick();}}>Divide Problem</button></div>
  <div className="container">

    <div className="problem">
    <Problems questionList={questionList} />
    </div>
        <textarea autoFocus= {autoFocus}
                  onChange= {handleInputAnswer}
                  onSubmit = {handleSubmitAnswer}
                  value = {inputAnswer}
                  onKeyPress={keypress}
                  placeholder= "input answer"/>
        <button type= "submit" onKeyPress={keypress}form className="commentForm" onClick={handleSubmitAnswer}>Submit</button>
        </div>

      <header className="App-header" >


        {message}
      </header>
    </div>
  )
}

export default App

