import './App.css';
import React, { useState } from 'react';
import Problems from './problems';

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [inputAnswer, setInputAnswer] = useState("")
  const [message, setMessage] = useState("")
  const [questionType, setQuestionType] = useState("")
  const handleMultiplyClick = () => {
    var E = Math.floor(Math.random()*9+2);
    var G = Math.floor(Math.random()*9+2);
    var answer = E*G
    var question = E+" * "+G+" = ";
    // let tempList = questionList;
    // tempList.push(question);
    setQuestionList([question]);
    setCorrectAnswer([answer])
    setQuestionType(["multiply"])
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
    setQuestionType(["divide"])

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
  if (inputAnswer == correctAnswer) {
    setMessage(randomMessage)
  }
  else {
    setTimeout(setMessage("Uh oh try again! The right answer was " + correctAnswer),3000)
  }
  if (questionType == "multiply") {
    handleMultiplyClick()
  }
  else {
    handleDivideClick()
  }
}


  return (
<div>
      <header className="App-header">
        <Problems questionList={questionList} />
        <button onClick= {() => {handleMultiplyClick();}}>Multiply Problem</button>
        <button onClick= {() => {handleDivideClick();}}>Divide Problem</button>
        <textarea onChange= {handleInputAnswer}
                  onSubmit = {handleSubmitAnswer}
                  value = {inputAnswer}
                  placeholder= "input answer"/>
        <button type= "submit" form className="commentForm" onClick={handleSubmitAnswer}>Submit</button>
        {message}
      </header>
    </div>
  )
}

export default App

