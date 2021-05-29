import React from 'react';
import ReactDOM from 'react-dom';
import QuestionTableData from './QuestionTableData';
import {render, cleanup} from '@testing-library/react'

it('renders without crashing', ()=>{
  const { asFragment} = render(<QuestionTableData questioinList={[
    {
      text: '3x7',
      type: "Multiplying",
      correctAnswer: 21,
      userAnswer: "",
      status: "correct",
      image: 'none',
    },
    {
      text: '2x4',
      type: "Multiplying",
      correctAnswer: 8,
      userAnswer: "",
      status: "unanswered",
      image: 'none',
    },
    {
      text: '7x6',
      type: "Multiplying",
      correctAnswer: 42,
      userAnswer: "",
      status: "unanswered",
      image: 'none',
    }]}/>)
  expect(asFragment(<QuestionTableData questionList={[{
    
      text: '3x7',
      type: "Multiplying",
      correctAnswer: 21,
      userAnswer: "",
      status: "correct",
      image: 'none',
    },
    {
      text: '2x4',
      type: "Multiplying",
      correctAnswer: 8,
      userAnswer: "",
      status: "unanswered",
      image: 'none',
    },
    {
      text: '7x6',
      type: "Multiplying",
      correctAnswer: 42,
      userAnswer: "",
      status: "unanswered",
      image: 'none',
  }
]}/>)).toMatchSnapshot()
  // ReactDOM.render(<QuestionTableData/>, div)
})