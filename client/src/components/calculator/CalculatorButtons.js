import React from "react";
import PropTypes from "prop-types";

const CalculatorButtons = props => (
  <div>
    <div className="btn-toolbar">
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(7)}
      >
        7
      </button>
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(8)}
      >
        8
      </button>
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(9)}
      >
        9
      </button>
      <button
        className="btn btn-info customCalculatorButton"
        onClick={() => props.onOperatorClick("+")}
      >
        +
      </button>
    </div>
    <div className="btn-toolbar">
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(4)}
      >
        4
      </button>
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(5)}
      >
        5
      </button>
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(6)}
      >
        6
      </button>
      <button
        className="btn btn-info customCalculatorButton"
        onClick={() => props.onOperatorClick("-")}
      >
        -
      </button>
    </div>
    <div className="btn-toolbar">
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(1)}
      >
        1
      </button>
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(2)}
      >
        2
      </button>
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(3)}
      >
        3
      </button>
      <button
        className="btn btn-info customCalculatorButton"
        onClick={() => props.onOperatorClick("*")}
      >
        *
      </button>
    </div>
    <div className="btn-toolbar">
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={() => props.onNumberClick(0)}
      >
        0
      </button>
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={props.onDotClick}
      >
        .
      </button>
      <button
        className="btn btn-primary customCalculatorButton"
        onClick={props.calculateClick}
        disabled={props.disabled}
      >
        =
      </button>
      <button
        className="btn btn-info customCalculatorButton"
        onClick={() => props.onOperatorClick("/")}
      >
        /
      </button>
    </div>
  </div>
);

CalculatorButtons.propTypes = {
  onNumberClick: PropTypes.func.isRequired,
  onOperatorClick: PropTypes.func.isRequired,
  onDotClick: PropTypes.func.isRequired,
  calculateClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default CalculatorButtons;
