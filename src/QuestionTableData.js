import React from 'react';
import Check from './assets/images/check.png'

const QuestionTableData = props => {
  const {questionList} = props;
  console.log(questionList)
  const questionTableData = () => {
    let tableData = []
    for (let i=0;i< questionList.length-1; i++) {
    console.log(questionList[i].image)

      tableData.push(
        <tr>
        <td>
          {questionList[i].text + questionList[i].correctAnswer}
        </td>
        <td className="td-answerCheck">
      
          {questionList[i].status === "wrong"
            ? <React.Fragment><p className="redX">X</p>({questionList[i].userAnswer})</React.Fragment>
            : <img
            className="star"
            alt="redx"
            src={Check}
          />}
        </td>
      </tr>
      )
    }
    return tableData
  }
  return(
    <div className="tableData">
    <button
      className="try-again"
      onClick={() => {
        if (questionList.length > 0) {
          props.handleOperationClick(questionList[0].type);
        } else {
          props.handleOperationClick('Multiplying');
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
              <div className="table-accuracy"> {props.accuracy}</div>
            </div>
          </th>
        </tr>

        {questionTableData()}
        
      </tbody>
    </table>
  </div>
  )
};

export default QuestionTableData;