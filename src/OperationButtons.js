import React from 'react';

const OperationButtons = props => {
 
return (
  <ul className="operation-button-container">
  <div style={{display:'flex'}}>
    <li>
      <button
        className="operation-button"
        onClick={() => {
          props.handleOperationClick("Multiplying", 'buttonClick');
        }}
      >
        ×
      </button>
    </li>
    <li>
      <button
        className="operation-button"
        onClick={() => {
          props.handleOperationClick("Dividing",'buttonClick');
        }}
      >
        ÷
      </button>
    </li>
    </div>
    <div style={{display:'flex'}}>
    <li>
      <button
        className="operation-button"
        onClick={() => {
          props.handleOperationClick("Adding",'buttonClick');
        }}
      >
        +
      </button>
    </li>
    <li>
      <button
        className="operation-button"
        onClick={() => {
            props.handleOperationClick("Subtracting",'buttonClick');         
        }}
      >
        -
      </button>
    </li>
  </div>
</ul>
)
}

export default OperationButtons