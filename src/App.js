import './App.css';
import React, { useState } from 'react';
import Problems from './problems';

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [inputAnswer, setInputAnswer] = useState("")
  const [message, setMessage] = useState("")
  const handleMultiplyClick = () => {
    var E = Math.floor(Math.random()*15+2);
    var G = Math.floor(Math.random()*15+2);
    var answer = E*G
    var question = E+" * "+G+" = "+(E*G) + " ";
    // let tempList = questionList;
    // tempList.push(question);
    setQuestionList([question]);
    setCorrectAnswer([answer])
  }

  const handleDivideClick = () => {
    var G = Math.floor(Math.random()*9+2);
    var answer = Math.floor(Math.random()*9+2);
    var T = answer*G
    var question = T+ " / "+G+" = "+ answer + " ";
    // let tempList = questionList;
    // tempList.push(question);
    setQuestionList([question]);
    setCorrectAnswer([answer])

  }
  const handleInputAnswer = (e) => {
    setInputAnswer(e.target.value)
    console.log(inputAnswer)
    console.log(message)
  }
const handleSubmitAnswer = (e) => {
  e.preventDefault();

  if (inputAnswer == correctAnswer) {
    setMessage("Great job!")
  }
  else {
    setMessage("Uh oh try again! The right answer was " + correctAnswer)
  }
}

  return (
<div>
      <header className="App-header">
        <Problems questionList={questionList} />
        <button onClick= {() => {handleMultiplyClick();}}>Multiply Problem</button>
        <button onClick= {() => {handleDivideClick();}}>Divide Problem</button>
        <form onSubmit = {handleSubmitAnswer}>
        <textarea onChange= {handleInputAnswer}
                  onSubmit = {handleSubmitAnswer}
                  value = {inputAnswer}
                  placeholder= "input answer"/>
        <button type= "submit" form className="commentForm" onSubmit={handleSubmitAnswer}>Submit</button>
        </form>
        {message}
      </header>
    </div>
  )
}

export default App

