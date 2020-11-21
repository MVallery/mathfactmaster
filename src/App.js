import "./App.css";
import React, { useState } from "react";
import Problems from "./problems";

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [inputAnswer, setInputAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [autoFocus, setAutoFocus] = useState("autoFocus");
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [livesLeft, setLivesLeft] = useState(3);
  const [accuracy, setAccuracy] = useState("");

  const [wrongAnswerList, setWrongAnswerList] = useState([]);
  const [completedQList, setCompletedQList] = useState([]);
  // const [questionType, setQuestionType] = useState("multiply");
  // const [correctAnswer, setCorrectAnswer] = useState([]);



  const handleMultiplyClick = () => {
    var E = Math.floor(Math.random() * 9 + 2);
    var G = Math.floor(Math.random() * 9 + 2);
    var answer = E * G;
    var question = E + " × " + G + " = ";
    console.log(question)
    console.log(questionList)
    // let tempList = questionList;
    // tempList.push(question);
    var wrongAnswerList = questionList.filter((question) => {
      var tempList = []
      if (question.status === "wrong"){
        tempList.push(question)
        
      }
      console.log(tempList)
      
    })

    if (wrongAnswerList.length > 0) {
      var wrong = 
        wrongAnswerList[Math.floor(Math.random() * wrongAnswerList.length)];
        if (Math.random()<0.6) {
          console.log("insert wrong question")
          question = wrong
        }
    } 

    var questionData = {
      text: question,
      type: 'multiply',
      correctAnswer: answer,
      userAnswer: null,
      status: 'unanswered'
    };

    var tempQuestionList = JSON.parse(JSON.stringify(questionList));
    tempQuestionList.push(questionData);
    console.log(tempQuestionList)
    // questionList = tempQuestionList;
    setQuestionList(tempQuestionList);
    setAutoFocus("autoFocus");

    // questionList[0].text
    // var tempQuestionList = JSON.parse(JSON.stringify(questionList));
    // tempQuestionList[0].text = "something";
    // setQuestionList(tempQuestionList);
  };

  const handleDivideClick = (e) => {
    var G = Math.floor(Math.random() * 9 + 2);
    var answer = Math.floor(Math.random() * 9 + 2);
    var T = answer * G;
    var question = T + " ÷ " + G + " = ";
    // let tempList = questionList;
    // tempList.push(question);
    // setQuestionList([question]);
    // setCorrectAnswer([answer]);
    // setQuestionType("divide");
    setAutoFocus("autoFocus");
  };
  const handleInputAnswer = (e) => {
    e.preventDefault();
    var tempList = questionList;
    tempList[tempList.length-1].userAnswer = e.target.value;

    // tempList.length>0 ? tempList[tempList.length-1].userAnswer = e.target.value : "";
    setQuestionList(tempList);
    // setInputAnswer(e.target.value);
  };
  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    if (questionList.length < 10) {
      // let tempList = completedQList;

      if (questionList[questionList.length-1].correctAnswer === String(questionList[questionList.length-1].userAnswer)) {
        var goodMessages = [
          "Great job",
          "Awesome!",
          "Wow keep it up!",
          "You got it!!",
        ];
        var tempList = questionList;
        tempList[tempList.length-1].status = "correct!";
        setQuestionList(tempList)
        var randomMessage =
          goodMessages[Math.floor(Math.random() * goodMessages.length)];

        setMessage(randomMessage);
        setCount(count + 1);
// THIS PART IS WEIRD
        // tempList.push(questionList[questionList.length-1].text + " " + questionList[questionList.length-1].userAnswer + ": Correct!");
        // var completedQList =
        // questionList.map((question, index) => {
        //   return question.text + " " + question.answer + " " + question.status;
        // })
        
        // setCompletedQList(tempList);

        if (questionList[questionList.length-1].type === "multiply") {
          setTimeout(handleMultiplyClick, 1000);
          setTimeout(() => {
            setMessage("");
          }, 1000);
        } else {
          setTimeout(handleDivideClick, 2000);
          setTimeout(() => {
            setMessage("");
          }, 2000);
        }
      } else {
        var badMessages = [
          "Uh oh try again! ",
          "So close, yet so far away ",
          "Better luck next time! ",
          "I wish this was good news...",
          "We can't all be perfect. ",
          "Ouch, that sucks try again! ",
        ];
        var randomMessage =
          badMessages[Math.floor(Math.random() * badMessages.length)];
        var tempList = [];
        tempList.push(
          questionList[questionList.length-1].text +
            " " +
            questionList[questionList.length-1].userAnswer +
            ": Wrong (Correct answer: " +
            questionList[questionList.length-1].correctAnswer +
            ")"
        );
        let tempWrongList = wrongAnswerList;
        tempWrongList.push(questionList[questionList.length-1].text);
        // setWrongAnswerList(tempWrongList);

        setMessage(
          "Your answer: " + questionList[questionList.length-1].userAnswer + " " + randomMessage + questionList[questionList.length-1].text + " " + questionList[questionList.length-1].correctAnswer
        );
        if (questionList[questionList.length-1].type === "multiply") {
          setTimeout(handleMultiplyClick, 3000);
          setTimeout(() => {
            setMessage("");
          }, 3000);
        } else {
          setTimeout(handleDivideClick, 4000);
          setTimeout(() => {
            setMessage("");
          }, 4000);
        }
      }
    // Not sure how to change this....***
      setInputAnswer("");

      // setTimeout(newQuestion, 5000)
    } else {
      setAccuracy(
        (((10 - wrongAnswerList.length) / 10) * 100).toString() + " %"
      );
      // console.log(accuracy);
      // setCompletedQList([]);
    }
  };

  const keypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitAnswer(e);
    }
  };
  const questionCompletedDisplay = () => {
    if (questionList.length > 9) {
      return (
        <ul className="ul-completedQ">
          {completedQList.map((question, index) => {
            return (
              <li className="li-completedQ" key={index}>
                {question.text + " " + question.answer + " " + question.status}
              </li>
            );
          })}
        </ul>
      );
    } else {
    }
  };

  return (
    <div className="Giant-container">
      <ul className="ul-nav">
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp">Multiplying Help</a>
        </li>
        <li>
          <a href="contact.asp">Dividing Help</a>
        </li>
      </ul>
      <div className="container">
        <button
          onClick={() => {
            handleMultiplyClick();
          }}
        >
          Multiply Problem
        </button>
        <button
          onClick={() => {
            handleDivideClick();
          }}
        >
          Divide Problem
        </button>
      </div>
      <div className="container">
        <div className="problem">
          <div className="card-top">
            <p>Number Correct: {count}</p>
          </div>
          {console.log(questionList)}
          
          <Problems questionList={ questionList.length>0 ? questionList[questionList.length-1].text : ""} />
          <input
            type="text"
            onChange={handleInputAnswer}
            onSubmit={handleSubmitAnswer}
            autoFocus={autoFocus}
            value={inputAnswer} //how to set this using objects?
            onKeyPress={keypress}
            placeholder="input answer"
          ></input>
          {/* <textarea autoFocus= {autoFocus}
                  onChange= {handleInputAnswer}
                  onSubmit = {handleSubmitAnswer}
                  value = {inputAnswer}
                  onKeyPress={keypress}
                  placeholder= "input answer"/> */}
          <button
            type="submit"
            onKeyPress={keypress}
            form
            className="commentForm"
            onClick={handleSubmitAnswer}
          >
            Submit
          </button>
        </div>
      </div>

      <header className="App-header">
        {message}
        <div>
          {questionCompletedDisplay()}
          {accuracy}
        </div>
      </header>
    </div>
  );
}

export default App;
