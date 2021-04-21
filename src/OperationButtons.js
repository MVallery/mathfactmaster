import React from 'react';

const OperationButtons = props => {
return (
  <ul className="ul-questiontype">
  <div>
    <li>
      <button
        className="li-questiontype"
        onClick={() => {
          props.handleMainClick("Multiplying");
        }}
      >
        ×
      </button>
    </li>
    <li>
      <button
        className="li-questiontype"
        onClick={() => {
          props.handleMainClick("Dividing");
        }}
      >
        ÷
      </button>
    </li>
    <li>
      <button
        className="li-questiontype"
        onClick={() => {
          props.handleMainClick("Adding");
        }}
      >
        +
      </button>
    </li>
    <li>
      <button
        className="li-questiontype"
        onClick={() => {
          props.handleMainClick("Subtracting");
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