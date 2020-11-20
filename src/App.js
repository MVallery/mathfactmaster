import "./App.css";
import React, { useState } from "react";
import Problems from "./problems";

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [inputAnswer, setInputAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [questionType, setQuestionType] = useState("multiply");
  const [autoFocus, setAutoFocus] = useState("autoFocus");
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [completedQList, setCompletedQList] = useState([]);
  const [livesLeft, setLivesLeft] = useState(3);
  const [wrongAnswerList, setWrongAnswerList] = useState([]);
  const [accuracy, setAccuracy] = useState("");

  const handleMultiplyClick = () => {
    var E = Math.floor(Math.random() * 9 + 2);
    var G = Math.floor(Math.random() * 9 + 2);
    var answer = E * G;
    var question = E + " × " + G + " = ";
    // let tempList = questionList;
    // tempList.push(question);

    if (wrongAnswerList.length > 0) {
      var wrong = 
        wrongAnswerList[Math.floor(Math.random() * wrongAnswerList.length)];
        if (Math.random()<0.6) {
          console.log("insert wrong question")
          question = wrong
        }
        setQuestionList([question]);
        setCorrectAnswer([answer]);
      // const wrongPractice = [wrong, wrong, question];
      // var question =
      //   wrongPractice[Math.floor(Math.random() * wrongPractice.length)];
      // console.log(wrong);
      // console.log(wrongPractice);
      // console.log(question);
      // console.log(wrongAnswerList)
    } else {
      setQuestionList([question]);
      setCorrectAnswer([answer]);
    }

    setQuestionType("multiply");
    console.log(questionType);
    setAutoFocus("autoFocus");
  };

  const handleDivideClick = (e) => {
    var G = Math.floor(Math.random() * 9 + 2);
    var answer = Math.floor(Math.random() * 9 + 2);
    var T = answer * G;
    var question = T + " ÷ " + G + " = ";
    // let tempList = questionList;
    // tempList.push(question);
    setQuestionList([question]);
    setCorrectAnswer([answer]);
    setQuestionType("divide");
    setAutoFocus("autoFocus");
  };
  const handleInputAnswer = (e) => {
    setInputAnswer(e.target.value);
    console.log(inputAnswer);
    console.log(message);
  };
  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    if (completedQList.length < 10) {
      let tempList = completedQList;

      if (inputAnswer === String(correctAnswer)) {
        var goodMessages = [
          "Great job",
          "Awesome!",
          "Wow keep it up!",
          "You got it!!",
        ];
        var randomMessage =
          goodMessages[Math.floor(Math.random() * goodMessages.length)];

        setMessage(randomMessage);
        setCount(count + 1);

        tempList.push(questionList + " " + inputAnswer + ": Correct!");
        setCompletedQList(tempList);
        console.log(completedQList);

        if (questionType === "multiply") {
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
        tempList.push(
          questionList +
            " " +
            inputAnswer +
            ": Wrong (Correct answer: " +
            correctAnswer +
            ")"
        );
        let tempWrongList = wrongAnswerList;
        tempWrongList.push(questionList[0]);
        setWrongAnswerList(tempWrongList);
        console.log(completedQList);

        setMessage(
          "Your answer: " + inputAnswer + " " + randomMessage + questionList + " " + correctAnswer
        );
        if (questionType === "multiply") {
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

      setInputAnswer("");

      // setTimeout(newQuestion, 5000)
    } else {
      setAccuracy(
        (((10 - wrongAnswerList.length) / 10) * 100).toString() + " %"
      );
      console.log(accuracy);
      setCompletedQList([]);
    }
  };

  const keypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitAnswer(e);
    }
  };
  const questionCompletedDisplay = () => {
    if (completedQList.length > 9) {
      return (
        <ul className="ul-completedQ">
          {completedQList.map((value, index) => {
            return (
              <li className="li-completedQ" key={index}>
                {value}
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
          <Problems questionList={questionList} />
          <input
            type="text"
            onChange={handleInputAnswer}
            onSubmit={handleSubmitAnswer}
            autoFocus={autoFocus}
            value={inputAnswer}
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
