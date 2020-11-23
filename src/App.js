import "./App.css";
import React, { useState } from "react";
import Problems from "./problems";
import Star from './assets/images/star.png';


function App() {
  const [questionList, setQuestionList] = useState([]);
  // const [inputAnswer, setInputAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [autoFocus, setAutoFocus] = useState("autoFocus");
  const [count, setCount] = useState(0);
  const [stars, setStars] = useState("")
  // const [time, setTime] = useState(0);

  // const [livesLeft, setLivesLeft] = useState(3);
  const [accuracy, setAccuracy] = useState("");

  // const [wrongAnswerList, setWrongAnswerList] = useState([]);
  // const [completedQList, setCompletedQList] = useState([]);
  // const [questionType, setQuestionType] = useState("multiply");
  // const [correctAnswer, setCorrectAnswer] = useState([]);
  function ClearFields() {

    document.getElementById("inputAnswer").value = ""; //not working bc there's no value?

}
  const handleMultiplyClick = () => {

    var E = Math.floor(Math.random() * 9 + 2);
    var G = Math.floor(Math.random() * 9 + 2);
    var answer = E * G;
    var question = E + " × " + G + " = ";
    // console.log(question)
    // console.log(questionList)
    // let tempList = questionList;
    // tempList.push(question);
    var wrongAnswerList = questionList.filter((q) => {
      var tempList = []
      if (q.status === "wrong"){
        tempList.push(q)
        console.log("this is the wronglist" + tempList)

      }
      return (
        tempList
      );
      
      
    })
    console.log("thi is wrong answer list" + wrongAnswerList)
    if (wrongAnswerList.length > 100) {
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
      userAnswer: "",
      status: 'unanswered'
    };

    var tempQuestionList = JSON.parse(JSON.stringify(questionList));
    tempQuestionList.push(questionData);
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
    var wrongAnswerList = []
    e.preventDefault();

    if (questionList.length < 10) {
      // let tempList = completedQList;

      if (String(questionList[questionList.length-1].correctAnswer) === String(questionList[questionList.length-1].userAnswer)) {
        
        
        
        
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
        setStars({Star})
        // setStars(<img className= "star" src={Star}></img>)
        const star = (c) => {
          var i
          for (i=0; i<c; i++) {
            var tempStar = stars;
            tempStar({Star})
            stars(tempStar)
            // {Star}
            
              // console.log("This is a star")
              
        
            
          };
          // return (starImage)
      
        };
        setStars(star);
// THIS PART IS WEIRD
        // tempList.push(questionList[questionList.length-1].text + " " + questionList[questionList.length-1].userAnswer + ": Correct!");
        // var completedQList =
        // questionList.map((question, index) => {
        //   return question.text + " " + question.answer + " " + question.status;
        // })
        
        // setCompletedQList(tempList);

        if (questionList[questionList.length-1].type === "multiply") {
          setTimeout(handleMultiplyClick, 1000);
          console.log("CHecking if answer is correct & type=multiply")
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
          "Uh oh try again! ", "So close, yet so far away ",
          "Better luck next time! ", "I wish this was good news...",
          "We can't all be perfect. ", "Ouch, that sucks try again! ",
        ];

        var tempQuestionList = questionList;
        tempQuestionList[tempQuestionList.length-1].status = "wrong";
        setQuestionList(tempQuestionList);


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
          console.log("this is the check for not right, and type=multiply")
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
    // Not sure how to change this so that it doesn't clear out the actual userInput but still clears out the input box....***
    // var tempList = questionList;
    // tempList[tempList.length-1].userAnswer = ""
    // setQuestionList(tempList)

      // setInputAnswer("");

      // setTimeout(newQuestion, 5000)
    } else {
      setAccuracy(
        (((10 - wrongAnswerList.length) / 10) * 100).toString() + " %"
      );
      // console.log(accuracy);
      // setCompletedQList([]);
    };
  };
  const starImages = (c) => {
    if (c === 1) {
      return (
        <img className= "star" src={Star}></img>
      );
    };
    if (c === 2) {
      return (
        <div>
        <img className= "star" src={Star}></img>
        <img className= "star" src={Star}></img>
        </div>
      );
    }
    if (c > 2) {
      return (
        <div>
        <img className= "star" src={Star}></img>;
        <img className= "star" src={Star}></img>;
        <img className= "star" src={Star}></img>;
        </div>
      )
    }

  }
  const keypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitAnswer(e);
    };
  };
  const questionCompletedDisplay = () => {
    if (questionList.length > 9) {
      return (
        <ul className="ul-completedQ">
          {questionList.map((question, index) => {
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
       <ul className="ul-nav"> {/*.onload= function(){handleMultiplyClick}; */}
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
      <div className="problem">
      <div className="card-top">
            <p>Number Correct: {count}</p>
      </div>
        <div >

          {/* {console.log(questionList)} */}
         
          <Problems questionList={ questionList.length>0 ? questionList[questionList.length-1].text : ""} />
          <input id="inputAnswer"
            type="text"
            onChange={handleInputAnswer}
            onSubmit={handleSubmitAnswer & ClearFields}
            autoFocus={autoFocus}
            // value={questionList[questionList.length-1].userAnswer} //how to set this using objects?

            // value={inputAnswer} //how to set this using objects?
            onKeyPress={keypress}
            placeholder="input answer"
            // onBlur={this.blurEvent}
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
          
        {/* {const star = (count) => {
          var i
          for (i=0; i<count; i++) {
            
              console.log("This is a star")
        
            
          };
      
        };} */}
        {starImages(count)}
'
          {/* {star(count)} */}

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
