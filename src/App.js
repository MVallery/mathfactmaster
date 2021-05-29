import "./App.css";
import React, { useState, useEffect } from "react";
import Problems from "./problems";
import Star from "./assets/images/star.png";
import Check from "./assets/images/check.png";
import RedX from "./assets/images/redx.png";
import Blank from "./assets/images/blank.png";
import Logo from "./assets/images/mfm-icon.svg";
import OperationButtons from './OperationButtons';
import QuestionTableData from './QuestionTableData';

const App = () =>{
  const [questionList, setQuestionList] = useState([]);
  const [correctedList, setCorrectedList] = useState([]);
  const [inputAnswer, setInputAnswer] = useState("");
  const [autoFocus, setAutoFocus] = useState("autoFocus");
  const [count, setCount] = useState(0);
  const [accuracy, setAccuracy] = useState("");
  const [answerCheck, setAnswerCheck] = useState(['', ''])

  useEffect(() => {
    handleOperationClick('Multiplying');
  }, []);

  const handleClearQuestionList = () => {
    setQuestionList([]);
  };
  // const handleMainClick = (operation) => {
  //   setQuestionList([]);
  //   handleOperationClick()
  //   if (operation === "Multiplying") {
  //     handleMultiplyClick();
  //   } else if (operation === "Dividing") {
  //     handleDivideClick();
  //   } else if (operation === "Adding") {
  //     handleAddClick();
  //   } else {
  //     handleSubClick();
  //   }
  // };
  const handleOperationClick = (operation) => {
    var answer;
    var question;
    var num1 = Math.floor(Math.random() * 9 + 2);
    var num2 = Math.floor(Math.random() * 9 + 2);
    switch (operation){
      case 'Multiplying':
        answer = num1 * num2;
        question = num1 + " × " + num2 + " = ";
        break;
      case 'Dividing':
        answer = num1
        var total = answer * num2;
        question = total + " ÷ " + num2 + " = ";
        break;
      case 'Adding':
        answer = num1 + num2;
        question = num1 + " + " + num2 + " = ";
        break;
      case 'Subtracting':
        answer = num1
        total = num2 + answer;
        question = total + " - " + num2 + " = ";
        break;
    }

    setAutoFocus("autoFocus");


    let wrongAnswers = wrongAnswerList();
    if (wrongAnswers.length > 0) {
      console.log('correctedList',correctedList)
      console.log('wronganswerlist',wrongAnswerList())
      var newWrongAnswerList = wrongAnswers.filter(wrong=>{
        return(!correctedList.includes(wrong.text))
      })
      console.log('newwronganswerlist',newWrongAnswerList)
      if (newWrongAnswerList.length>0){
        var wrong = newWrongAnswerList[
          Math.floor(Math.random() * wrongAnswers.length)
        ];
        if (Math.random() < 0.6) {
          question = wrong.text;
          answer = wrong.correctAnswer;
          console.log("This is a repeated wrong Q" + question);
        }
      }

    }

    var questionData = {
      text: question,
      type: operation,
      correctAnswer: answer,
      userAnswer: "",
      status: "unanswered",
      image: Blank,
    };
    var tempQuestionList = JSON.parse(JSON.stringify(questionList));

    if (
      questionList.length > 0 &&
      (questionList.length > 10 ||
      questionList[questionList.length - 1].type !== operation)
    ) {
      tempQuestionList = [questionData];
      setCount(0);
      setAccuracy(0);
    } else {
      tempQuestionList.push(questionData);
    }
    setQuestionList(tempQuestionList);
    setAutoFocus("autoFocus");
  }
  // const handleMultiplyClick = () => {


  //   let wrongAnswers = wrongAnswerList();
  //   if (wrongAnswerList().length > 0) {
  //     console.log('correctedList',correctedList)
  //     console.log('wronganswerlist',wrongAnswerList())
  //     var newWrongAnswerList = wrongAnswerList().filter(wrong=>{
  //       return(!correctedList.includes(wrong.text))
  //     })
  //     console.log('newwronganswerlist',newWrongAnswerList)
  //     if (newWrongAnswerList.length>0){
  //       var wrong = newWrongAnswerList[
  //         Math.floor(Math.random() * wrongAnswerList().length)
  //       ];
  //       if (Math.random() < 0.6) {
  //         question = wrong.text;
  //         answer = wrong.correctAnswer;
  //         console.log("This is a repeated wrong Q" + question);
  //       }
  //     }

  //   }

  //   var questionData = {
  //     text: question,
  //     type: "Multiplying",
  //     correctAnswer: answer,
  //     userAnswer: "",
  //     status: "unanswered",
  //     image: Blank,
  //   };
  //   var tempQuestionList = JSON.parse(JSON.stringify(questionList));

  //   if (
  //     questionList.length > 0 &&
  //     (questionList.length > 10 ||
  //     questionList[questionList.length - 1].type !== "Multiplying")
  //   ) {
  //     tempQuestionList = [questionData];
  //     setCount(0);
  //     setAccuracy(0);
  //   } else {
  //     tempQuestionList.push(questionData);
  //   }
  //   setQuestionList(tempQuestionList);
  //   setAutoFocus("autoFocus");
  // };

  // const handleDivideClick = (e) => {
  //   var G = Math.floor(Math.random() * 9 + 2);
  //   var answer = Math.floor(Math.random() * 9 + 2);
  //   var T = answer * G;
  //   var question = T + " ÷ " + G + " = ";
  //   setAutoFocus("autoFocus");

  //   if (wrongAnswerList().length > 0) {
  //     var wrong = wrongAnswerList()[
  //       Math.floor(Math.random() * wrongAnswerList().length)
  //     ];
  //     if (Math.random() < 0.6) {
  //       question = wrong.text;
  //       answer = wrong.correctAnswer;
  //       console.log("This is a repeated wrong Q" + question);
  //     }
  //   }

  //   var questionData = {
  //     text: question,
  //     type: "Dividing",
  //     correctAnswer: answer,
  //     userAnswer: "",
  //     status: "unanswered",
  //     image: Blank,
  //   };

  //   var tempQuestionList = JSON.parse(JSON.stringify(questionList));
  //   if (
  //     questionList.length > 0 &&
  //     (questionList.length > 10 ||
  //     questionList[questionList.length - 1].type !== "Dividing")
  //   ) {
  //     tempQuestionList = [questionData];
  //     setCount(0);
  //     setAccuracy(0);
  //   } else {
  //     tempQuestionList.push(questionData);
  //   }
  //   setQuestionList(tempQuestionList);
  //   setAutoFocus("autoFocus");
  // };

  // const handleAddClick = (e) => {
  //   var num1 = Math.floor(Math.random() * 9 + 2);
  //   var num2 = Math.floor(Math.random() * 9 + 2);
  //   var answer = num1 + num2;
  //   var question = num1 + " + " + num2 + " = ";
  //   setAutoFocus("autoFocus");

  //   if (wrongAnswerList().length > 0) {
  //     console.log(wrongAnswerList())
  //     var newWrongAnswerList = wrongAnswerList().filter(wrong=>{
  //       return(!correctedList.includes(wrong))
  //     })
  //     console.log(newWrongAnswerList)
  //     var wrong = newWrongAnswerList[
  //       Math.floor(Math.random() * newWrongAnswerList().length)
  //     ];
  //     if (Math.random() < 0.6) {
  //       question = wrong.text;
  //       answer = wrong.correctAnswer;
  //       console.log("This is a repeated wrong Q" + question);
  //     }
  //   }

  //   var questionData = {
  //     text: question,
  //     type: "Adding",
  //     correctAnswer: answer,
  //     userAnswer: "",
  //     status: "unanswered",
  //     image: Blank,
  //   };

  //   var tempQuestionList = JSON.parse(JSON.stringify(questionList));
  //   if (
  //     questionList.length > 0 &&
  //     (questionList.length > 10 ||
  //     questionList[questionList.length - 1].type !== "Adding")
  //   ) {
  //     tempQuestionList = [questionData];
  //     setCount(0);
  //     setAccuracy(0);
  //   } else {
  //     tempQuestionList.push(questionData);
  //   }
  //   setQuestionList(tempQuestionList);
  //   setAutoFocus("autoFocus");
  // };
  // const handleSubClick = (e) => {
  //   var num1 = Math.floor(Math.random() * 9 + 2);
  //   var answer = Math.floor(Math.random() * 9 + 2);
  //   var T = num1 + answer;
  //   var question = T + " - " + num1 + " = ";
  //   setAutoFocus("autoFocus");

  //   if (wrongAnswerList().length > 0) {
  //     var wrong = wrongAnswerList()[
  //       Math.floor(Math.random() * wrongAnswerList().length)
  //     ];
  //     if (Math.random() < 0.6) {
  //       question = wrong.text;
  //       answer = wrong.correctAnswer;
  //       console.log("This is a repeated wrong Q" + question);
  //     }
  //   }

  //   var questionData = {
  //     text: question,
  //     type: "Subtracting",
  //     correctAnswer: answer,
  //     userAnswer: "",
  //     status: "unanswered",
  //     image: Blank,
  //   };

  //   var tempQuestionList = JSON.parse(JSON.stringify(questionList));
  //   if (
  //     questionList.length > 0 &&
  //     (questionList.length > 10 ||
  //     questionList[questionList.length - 1].type !== "Subtracting")
  //   ) {
  //     tempQuestionList = [questionData];
  //     setCount(0);
  //     setAccuracy(0);
  //   } else {
  //     tempQuestionList.push(questionData);
  //   }
  //   setQuestionList(tempQuestionList);
  //   setAutoFocus("autoFocus");
  // };

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

  const handleAnswerCheck = () => {
    console.log(questionList[questionList.length - 1])
    var image = "";
    var answerDisplay = "";
    setTimeout(() => {
      image = "";
      answerDisplay = "";
    }, 3000);
    console.log(questionList.length)
    if (questionList.length === 0) {
      // return ["", ""];
    } else if (questionList[questionList.length - 1].status === "wrong") {
      image = <img className="star" alt="redx" src={RedX}></img>;
      answerDisplay =
        "  (" + questionList[questionList.length - 1].correctAnswer + ")";
      // return [image, answerDisplay];
    } else if (questionList[questionList.length - 1].status === "correct!") {
      image = <img className="star" alt="check" src={Check}></img>;
      answerDisplay = "";
      // return [image, answerDisplay];
    } else {
      console.log('inside answerCheck else')
      // return [image, answerDisplay];
    }
    setAnswerCheck([image,answerDisplay])
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    setInputAnswer("");
    if (
      String(questionList[questionList.length - 1].correctAnswer) ===
      String(questionList[questionList.length - 1].userAnswer)
    ) {
      var tempList = questionList;
      tempList[tempList.length - 1].image = Check;
      tempList[tempList.length - 1].status = "correct!";
      setQuestionList(tempList);
      setCount(count + 1);
      setAnswerCheck([<img className='star' alt='check' src={Check}/>, ''])
      let wrongAnswers = wrongAnswerList()
      let temp = correctedList
      for (i in wrongAnswers){
        if (wrongAnswers[i].text===questionList[questionList.length-1].text){
          temp.push(questionList[questionList.length-1].text)
          setCorrectedList(temp)
          break;
        }
      }
    } else {
      var tempList = questionList;
      tempList[tempList.length - 1].image = RedX;
      tempList[tempList.length - 1].status = "wrong";
      setQuestionList(tempList);
      setAnswerCheck([<img className='star' alt='redX' src={RedX}/>, "  (" + questionList[questionList.length - 1].correctAnswer + ")"])

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
    }
    // handleAnswerCheck();
    setTimeout(()=>{handleOperationClick(questionList[questionList.length -1].type)}, 1000)
    setTimeout(()=>{setAnswerCheck(['', ''])}, 1000)

      // if (questionList[questionList.length - 1].type === "Multiplying") {
      //   setTimeout(handleMultiplyClick, 1000);
      // } else if (questionList[questionList.length - 1].type === "Subtracting") {
      //   setTimeout(handleSubClick, 1000);
      // } else if (questionList[questionList.length - 1].type === "Adding") {
      //   setTimeout(handleAddClick, 1000);
      // } else {
      //   setTimeout(handleDivideClick, 1000);
      // }
    setAccuracy(
      Math.floor(
        ((questionList.length - wrongAnswerList().length) /
          questionList.length) *
          100
      ).toString() + " %"
    );

  };

  const keypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitAnswer(e);
    }
  };


  return (
    <div className="Giant-container">
      <div className="banner-container">
        <img className="logo-banner" src={Logo}></img>
        <h1 className="title-banner">Math Fact Master</h1>
        <OperationButtons handleOperationClick={handleOperationClick}/>
      </div>

      {questionList.filter((r) => r.status !== "").length > 10 ? null : (
        <div className="problem-card-container">
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
              
              {answerCheck}
            </div>
          </div>
        </div>
        </div>
      )}

          {questionList.filter((r) => r.status !== "").length > 10 ? (
        <div className="tableData-container">

            <QuestionTableData questionList={questionList} handleOperationClick={handleOperationClick} accuracy={accuracy}/>
            </div>

          ) : null}
          {}
          {/* {accuracy} */}
    </div>
  );
}

export default App;
