import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

function randomMultiply (){
  var Num1 = Math.floor(Math.random()*15+2)
  var Num2 = Math.floor(Math.random()*15+2)
  return (
    <div>
      <p>{Num1} * {Num2} = {Num1*Num2}</p>
    </div>
  )

}

function randomMultiply (){
  var Num1 = Math.floor(Math.random()*100+4)
  var Num2 = Math.floor(Math.random()*9+2)
  return (
    <div>
      <p>{Num1} / {Num2} = {Num1/Num2}</p>
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
          {this.props.probType === "Multiply" ? randomMultiply() : null}
          {this.props.probType === "Divide" ? randomDivide() : null}
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
}
export default Problems;

