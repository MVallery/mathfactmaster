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
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)
  const [completedQList, setCompletedQList] = useState([])
  const handleMultiplyClick = () => {
    var E = Math.floor(Math.random()*9+2);
    var G = Math.floor(Math.random()*9+2);
    var answer = E*G
    var question = E+" × "+G+" = ";
    // let tempList = questionList;
    // tempList.push(question);
    setQuestionList([question]);
    setCorrectAnswer([answer])
    setQuestionType("multiply")
    console.log(questionType)
    setAutoFocus("autoFocus")
  }

  const handleDivideClick = (e) => {
    var G = Math.floor(Math.random()*9+2);
    var answer = Math.floor(Math.random()*9+2);
    var T = answer*G
    var question = T+ " ÷ "+G+" = ";
    // let tempList = questionList;
    // tempList.push(question);
    setQuestionList([question]);
    setCorrectAnswer([answer])
    setQuestionType("divide")
    setAutoFocus("autoFocus")

  }
  const handleInputAnswer = (e) => {
    setInputAnswer(e.target.value)
    console.log(inputAnswer)
    console.log(message)
  }
const handleSubmitAnswer = (e) => {
  e.preventDefault();
 

  if (inputAnswer === String(correctAnswer)) {
    var goodMessages = ["Great job", "Awesome!", "Wow keep it up!", "You got it!!"]
    var randomMessage = goodMessages[Math.floor(Math.random()*goodMessages.length)]
    
    setMessage(randomMessage)
    setCount(count+1)
    
    let tempList = completedQList
    tempList.push(questionList + " " + inputAnswer + ": Correct!")
    setCompletedQList(tempList)
    console.log(completedQList)

    if (questionType === "multiply") {
      setTimeout(handleMultiplyClick, 2000)
      setTimeout(() => {setMessage ("")}, 2000)
    }
    else {
      setTimeout(handleDivideClick, 2000)
      setTimeout(() => {setMessage ("")}, 2000)
    }
  }
  else {
    var badMessages = ["Uh oh try again! ", "So close, yet so far away ", "Better luck next time! ", "I wish this was good news...", "We can't all be perfect. ", "Ouch, that sucks try again! "]
    var randomMessage = badMessages[Math.floor(Math.random()*badMessages.length)]
    let tempList = completedQList
    tempList.push(questionList + " " + inputAnswer + ": Wrong (Correct answer: " + correctAnswer + ")")
    setCompletedQList(tempList)
    console.log(completedQList)

    setMessage("Your answer: " + inputAnswer + " " + randomMessage + questionList + " " + correctAnswer)
    if (questionType === "multiply") {
      setTimeout(handleMultiplyClick, 5000)
      setTimeout(() => {setMessage ("")}, 5000)
    }
    else {
      setTimeout(handleDivideClick, 5000)
      setTimeout(() => {setMessage ("")}, 5000)
    }
  }

  setInputAnswer("")
  
  console.log(questionType)

  // setTimeout(newQuestion, 5000)

}

const keypress = (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    handleSubmitAnswer(e);
  }
}

  return (
<div className="Giant-container">
<ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">Multiplying Help</a></li>
  <li><a href="contact.asp">Dividing Help</a></li>
</ul>
<div className="container">
        <button onClick= {() => {handleMultiplyClick();}}>Multiply Problem</button>
        <button onClick= {() => {handleDivideClick();}}>Divide Problem</button></div>
  <div className="container">

    <div className="problem">
    <div className="card-top">
  <p>Number Correct: {count}</p>
    </div>
    <Problems questionList={questionList} />
    <input type="text" onChange={handleInputAnswer} 
                        onSubmit = {handleSubmitAnswer}
                        autoFocus= {autoFocus}
                        value = {inputAnswer}
                        onKeyPress = {keypress}
                        placeholder= "input answer"></input>
    {/* <textarea autoFocus= {autoFocus}
                  onChange= {handleInputAnswer}
                  onSubmit = {handleSubmitAnswer}
                  value = {inputAnswer}
                  onKeyPress={keypress}
                  placeholder= "input answer"/> */}
        <button type= "submit" onKeyPress={keypress}form className="commentForm" onClick={handleSubmitAnswer}>Submit</button>




    






    </div>

        </div>

      <header className="App-header" >


        {message}
        <div>
        <ul>
      {completedQList.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
    </div>
      </header>
    </div>
  )
}

export default App

