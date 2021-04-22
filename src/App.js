import "./App.css";
import React, { useState, useEffect } from "react";
import Problems from "./problems";
import Star from "./assets/images/star.png";
import Check from "./assets/images/check.png";
import RedX from "./assets/images/redx.png";
import Blank from "./assets/images/blank.png";
import Logo from "./assets/images/logo.jpg";
import OperationButtons from './OperationButtons';

function App() {
  const [questionList, setQuestionList] = useState([]);
  const [inputAnswer, setInputAnswer] = useState("");
  const [autoFocus, setAutoFocus] = useState("autoFocus");
  const [count, setCount] = useState(0);
  const [accuracy, setAccuracy] = useState("");

  useEffect(() => {
    handleMultiplyClick();
  }, []);

  const handleClearQuestionList = () => {
    setQuestionList([]);
  };
  const handleMainClick = (operation) => {
    setQuestionList([]);

    if (operation === "Multiplying") {
      handleMultiplyClick();
    } else if (operation === "Dividing") {
      handleDivideClick();
    } else if (operation === "Adding") {
      handleAddClick();
    } else {
      handleSubClick();
    }
  };
  const handleMultiplyClick = () => {
    var E = Math.floor(Math.random() * 9 + 2);
    var G = Math.floor(Math.random() * 9 + 2);
    var answer = E * G;
    var question = E + " × " + G + " = ";

    if (wrongAnswerList().length > 1) {
      var wrong = wrongAnswerList()[
        Math.floor(Math.random() * wrongAnswerList().length)
      ];
      if (Math.random() < 0.6) {
        question = wrong.text;
        answer = wrong.correctAnswer;
        console.log("This is a repeated wrong Q" + question);
      }
    }

    var questionData = {
      text: question,
      type: "Multiplying",
      correctAnswer: answer,
      userAnswer: "",
      status: "unanswered",
      image: Blank,
    };
    var tempQuestionList = JSON.parse(JSON.stringify(questionList));

    if (
      questionList.length > 0 &&
      (questionList.length > 10 ||
      questionList[questionList.length - 1].type !== "Multiplying")
    ) {
      tempQuestionList = [questionData];
      setCount(0);
      setAccuracy(0);
    } else {
      tempQuestionList.push(questionData);
    }
    setQuestionList(tempQuestionList);
    setAutoFocus("autoFocus");
  };

  const handleDivideClick = (e) => {
    var G = Math.floor(Math.random() * 9 + 2);
    var answer = Math.floor(Math.random() * 9 + 2);
    var T = answer * G;
    var question = T + " ÷ " + G + " = ";
    setAutoFocus("autoFocus");

    if (wrongAnswerList().length > 1) {
      var wrong = wrongAnswerList()[
        Math.floor(Math.random() * wrongAnswerList().length)
      ];
      if (Math.random() < 0.6) {
        question = wrong.text;
        answer = wrong.correctAnswer;
        console.log("This is a repeated wrong Q" + question);
      }
    }

    var questionData = {
      text: question,
      type: "Dividing",
      correctAnswer: answer,
      userAnswer: "",
      status: "unanswered",
      image: Blank,
    };

    var tempQuestionList = JSON.parse(JSON.stringify(questionList));
    if (
      questionList.length > 0 &&
      (questionList.length > 10 ||
      questionList[questionList.length - 1].type !== "Dividing")
    ) {
      tempQuestionList = [questionData];
      setCount(0);
      setAccuracy(0);
    } else {
      tempQuestionList.push(questionData);
    }
    setQuestionList(tempQuestionList);
    setAutoFocus("autoFocus");
  };

  const handleAddClick = (e) => {
    var num1 = Math.floor(Math.random() * 9 + 2);
    var num2 = Math.floor(Math.random() * 9 + 2);
    var answer = num1 + num2;
    var question = num1 + " + " + num2 + " = ";
    setAutoFocus("autoFocus");

    if (wrongAnswerList().length > 1) {
      var wrong = wrongAnswerList()[
        Math.floor(Math.random() * wrongAnswerList().length)
      ];
      if (Math.random() < 0.6) {
        question = wrong.text;
        answer = wrong.correctAnswer;
        console.log("This is a repeated wrong Q" + question);
      }
    }

    var questionData = {
      text: question,
      type: "Adding",
      correctAnswer: answer,
      userAnswer: "",
      status: "unanswered",
      image: Blank,
    };

    var tempQuestionList = JSON.parse(JSON.stringify(questionList));
    if (
      questionList.length > 0 &&
      (questionList.length > 10 ||
      questionList[questionList.length - 1].type !== "Adding")
    ) {
      tempQuestionList = [questionData];
      setCount(0);
      setAccuracy(0);
    } else {
      tempQuestionList.push(questionData);
    }
    setQuestionList(tempQuestionList);
    setAutoFocus("autoFocus");
  };
  const handleSubClick = (e) => {
    var num1 = Math.floor(Math.random() * 9 + 2);
    var answer = Math.floor(Math.random() * 9 + 2);
    var T = num1 + answer;
    var question = T + " - " + num1 + " = ";
    setAutoFocus("autoFocus");

    if (wrongAnswerList().length > 1) {
      var wrong = wrongAnswerList()[
        Math.floor(Math.random() * wrongAnswerList().length)
      ];
      if (Math.random() < 0.6) {
        question = wrong.text;
        answer = wrong.correctAnswer;
        console.log("This is a repeated wrong Q" + question);
      }
    }

    var questionData = {
      text: question,
      type: "Subtracting",
      correctAnswer: answer,
      userAnswer: "",
      status: "unanswered",
      image: Blank,
    };

    var tempQuestionList = JSON.parse(JSON.stringify(questionList));
    if (
      questionList.length > 0 &&
      (questionList.length > 10 ||
      questionList[questionList.length - 1].type !== "Subtracting")
    ) {
      tempQuestionList = [questionData];
      setCount(0);
      setAccuracy(0);
    } else {
      tempQuestionList.push(questionData);
    }
    setQuestionList(tempQuestionList);
    setAutoFocus("autoFocus");
  };
  const handleInputAnswer = (e) => {
    e.preventDefault();
    var tempList = questionList;
    tempList[tempList.length - 1].userAnswer = e.target.value;
    setQuestionList(tempList);
    setInputAnswer(e.target.value);
  };
  const wrongAnswerList = () => {
    return questionList.filter((q) => q.status === "wrong");
  };
  const answerCheck = () => {
    var image = "";
    var answerDisplay = "";
    setTimeout(() => {
      image = "";
      answerDisplay = "";
    }, 3000);
    if (questionList.length === 0) {
      return ["", ""];
    } else if (questionList[questionList.length - 1].status === "wrong") {
      image = <img className="star" alt="redx" src={RedX}></img>;
      answerDisplay =
        "  (" + questionList[questionList.length - 1].correctAnswer + ")";
      return [image, answerDisplay];
    } else if (questionList[questionList.length - 1].status === "correct!") {
      image = <img className="star" alt="check" src={Check}></img>;
      answerDisplay = "";
      return [image, answerDisplay];
    } else {
      return [image, answerDisplay];
    }
  };
  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    setInputAnswer("");
    if (questionList.length < 11) {
      if (
        String(questionList[questionList.length - 1].correctAnswer) ===
        String(questionList[questionList.length - 1].userAnswer)
      ) {
        var tempList = questionList;
        tempList[tempList.length - 1].image = Check;
        tempList[tempList.length - 1].status = "correct!";
        setQuestionList(tempList);
        setCount(count + 1);

      } else {
        var tempList = questionList;
        tempList[tempList.length - 1].image = RedX;
        setQuestionList(tempList);
        let inputSelect = document.querySelectorAll("input");

        for (var i = 0; i < inputSelect.length; i++) {
          inputSelect[i].style.borderColor = "red";
        }

        const normalBackground = () => {
          for (var i = 0; i < inputSelect.length; i++) {
            inputSelect[i].style.borderColor = "grey";
          }
        };
        setTimeout(normalBackground, 1500);
        var badMessages = [
          "Uh oh try again! ",
          "So close, yet so far away ",
          "Better luck next time! ",
          "I wish this was good news...",
          "We can't all be perfect. ",
          "Ouch, that sucks try again! ",
        ];

        var tempQuestionList = questionList;
        tempQuestionList[tempQuestionList.length - 1].status = "wrong";
        setQuestionList(tempQuestionList);

        var randomMessage =
          badMessages[Math.floor(Math.random() * badMessages.length)];
        var tempList = [];
        tempList.push(
          questionList[questionList.length - 1].text +
            " " +
            questionList[questionList.length - 1].userAnswer +
            ": Wrong (Correct answer: " +
            questionList[questionList.length - 1].correctAnswer +
            ")"
        );

      }
        if (questionList[questionList.length - 1].type === "Multiplying") {
          setTimeout(handleMultiplyClick, 1500);
        } else if (
          questionList[questionList.length - 1].type === "Subtracting"
        ) {
          setTimeout(handleSubClick, 1500);
        } else if (questionList[questionList.length - 1].type === "Adding") {
          setTimeout(handleAddClick, 1500);
        } else {
          setTimeout(handleDivideClick, 1500);
        }
      setAccuracy(
        Math.floor(
          ((questionList.length - wrongAnswerList().length) /
            questionList.length) *
            100
        ).toString() + " %"
      );
    } else {
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

  const questionTableData = () => {
    let tableData = []
    for (let i=0;i< questionList.length-1; i++) {
      tableData.push(
        <tr>
        <td>
          {questionList[i].text + questionList[i].correctAnswer}
        </td>
        <td>
          <img
            className="star"
            alt="redx"
            src={questionList[i].image}
          ></img>
          {questionList[i].status === "wrong"
            ? questionList[i].userAnswer
            : null}
        </td>
      </tr>
      )
    }
    return tableData
  }
  // const questionTableData = questionList.map((question) => {
  //     return (
  //       <tr>
  //       <td>
  //         {question.text + question.correctAnswer}
  //       </td>
  //       <td>
  //         <img
  //           className="star"
  //           alt="redx"
  //           src={question.image}
  //         ></img>
  //         {question.status === "wrong"
  //           ? question.userAnswer
  //           : null}
  //       </td>
  //     </tr>
  //     )
  //   })
  

  return (
    <div className="Giant-container">
      <div className="banner-container">
        <img className="logo-banner" src={Logo}></img>
        <h1 className="title-banner">Math Fact Master</h1>
      </div>
      <OperationButtons handleMainClick={handleMainClick}/>

      <p>
        Math Fact Master will help you to improve your math fact skills. If you miss any
        questions it will adjust to show you more of that type until you get it
        correct.
      </p>

      {questionList.filter((r) => r.status !== "").length > 10 ? null : (
        <div className="problem-card">
          <div className="card-title">
            <p style={{ borderRadius: "20px" }}>
              {questionList.length > 0
                ? questionList[questionList.length - 1].type
                : "Multiplying "}{" "}
              
            </p>
          </div>
          <div className="card-top">
            <p>
              Progress:{" "}
              {questionList.filter((r) => r.status === "correct!").length} /{" "}
              {questionList.filter((r) => r.image !== Blank).length} ={" "}
              {accuracy}
            </p>
          </div>
          <div className="question-answer">
            <div className="question">
              <Problems
                questionList={
                  questionList.length > 0
                    ? questionList[questionList.length - 1].text
                    : ""
                }
              />
            </div>
            {/* {setStartTime(begTime)} */}
            <input
              id="inputAnswer"
              type="text"
              onChange={handleInputAnswer}
              onSubmit={handleSubmitAnswer}
              autoFocus={autoFocus}
              value={inputAnswer}
              onKeyPress={keypress}
              placeholder=""
            ></input>

            <div className="answerCheck">
              {answerCheck()[0]}
              {answerCheck()[1]}
            </div>
          </div>
        </div>
      )}

      <header className="App-header">
        <div className="tableData">
          {questionList.filter((r) => r.status !== "").length > 10 ? (
            <div>
              <button
                className="try-again"
                onClick={() => {
                  if (questionList.length > 0) {
                    handleMainClick(questionList[0].type);
                  } else {
                    handleMultiplyClick();
                  }
                }}
              >
                Try again!
              </button>
              <table>
                <tbody>
                  <tr>
                    <th colspan="2">
                      {questionList[0].type} Practice <br></br>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        Results:{" "}
                        <div className="table-accuracy"> {accuracy}</div>
                      </div>
                    </th>
                  </tr>

                  {questionTableData()}
                  
                </tbody>
              </table>
            </div>
          ) : null}
          {}
          {/* {accuracy} */}
        </div>
      </header>
    </div>
  );
}

export default App;
