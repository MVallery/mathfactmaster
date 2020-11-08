import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


class Problems extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    console.log(this.props);
      return (
        <div>
          <p> 7 + 2</p>
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


