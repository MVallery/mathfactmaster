import './App.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

function randomMultiply (){
  var E = Math.floor(Math.random()*15+2)
  var T = Math.floor(Math.random()*15+2)
  return (
    <div>
      <p>{E} * {T} = {E*T}</p>
    </div>
  )
}

function randomDivide (){
  var G = Math.floor(Math.random()*9+2)
  var E = Math.floor(Math.random()*9+2)
  var T = E*G
  return (
    <div>
      <p>{T} / {G} = {E}</p>
    </div>
  )

}

class Problems extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    console.log(this.props);
      return (
        <div>
          {this.props.questionList.length > 0 ? this.props.questionList : null}
        </div>
      )
  }
}
// function Problems() {
//   return (
//     <div className="App">
//     <p>7 + 2</p>

//     </div>
//   );
// }

Problems.propTypes = {
  probType: PropTypes.any,
  probLevel: PropTypes.any,
  questionList: PropTypes.array,
}
export default Problems;

