import React from 'react';

const OperationButtons = props => {

  
return (
  <ul className="ul-questiontype">
  <div style={{display:'flex'}}>
    <li>
      <button
        className="li-questiontype"
        onClick={() => {
          props.handleOperationClick("Multiplying");
        }}
      >
        ×
      </button>
    </li>
    <li>
      <button
        className="li-questiontype"
        onClick={() => {
          props.handleOperationClick("Dividing");
        }}
      >
        ÷
      </button>
    </li>
    </div>
    <div style={{display:'flex'}}>
    <li>
      <button
        className="li-questiontype"
        onClick={() => {
          props.handleOperationClick("Adding");
        }}
      >
        +
      </button>
    </li>
    <li>
      <button
        className="li-questiontype"
        onClick={() => {
          props.handleOperationClick("Subtracting");
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