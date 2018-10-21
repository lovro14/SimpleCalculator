import React, { Component } from "react";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorDisplay from "./CalculatorDisplay";
import ControlButtons from "./ControlButtons";
import { connect } from "react-redux";
import {
  caclucalteMathOperation,
  clearCalculatorMemory
} from "../../store/actions";
import PropTypes from "prop-types";
import Spinner from "../UI/spinner/Spinner";

class Calculator extends Component {
  state = {
    inputContent: "",
    errors: {},
    lastOperator: "",
    minusStart: false,
    negativeOperand: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        inputContent: "",
        lastOperator: "",
        minusStart: false,
        negativeOperand: false
      });
    }
    if (nextProps.mathOperation.result) {
      this.setState({
        inputContent: nextProps.mathOperation.result,
        negativeOperand: false
      });
    }
  }

  onNumberClick = number => {
    this.setState(prevState => {
      return {
        inputContent: prevState.inputContent + number,
        errors: {}
      };
    });
  };

  onDotClick = () => {
    this.setState(prevState => {
      return {
        inputContent: prevState.inputContent + ".",
        errors: {}
      };
    });
  };

  onOperatorClick = operator => {
    if ((this.state.inputContent.slice(-1) === "+") & (operator === "-")) {
      this.setState(prevState => {
        return {
          inputContent: prevState.inputContent + operator
        };
      });
    } else if (
      (this.state.lastOperator === "*" || this.state.lastOperator === "/") &
      (operator === "-") &
      !this.state.negativeOperand &
      isNaN(this.state.inputContent.slice(-1))
    ) {
      this.setState(prevState => {
        return {
          negativeOperand: true,
          inputContent: prevState.inputContent + operator
        };
      });
    } else if (this.state.lastOperator.length > 0) {
      this.props.caclucalteMathOperation({
        mathematicalExpression: this.state.inputContent
      });
      this.setState({ lastOperator: "" });
    } else if ((operator === "-") & (this.state.inputContent.length === 0)) {
      this.setState(prevState => {
        return {
          inputContent: prevState.inputContent + operator
        };
      });
    } else {
      this.setState(prevState => {
        return {
          inputContent: prevState.inputContent + operator,
          lastOperator: operator
        };
      });
    }
  };

  onCalculateClick = () => {
    this.setState({ lastOperator: "" });
    this.props.caclucalteMathOperation({
      mathematicalExpression: this.state.inputContent
    });
  };

  onDeleteHandler = () => {
    const lastChar = this.state.inputContent.slice(-1);
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      this.setState(prevState => {
        return {
          inputContent: prevState.inputContent.substring(
            0,
            prevState.inputContent.length - 1
          ),
          lastOperator: ""
        };
      });
    } else {
      this.setState(prevState => {
        return {
          inputContent: prevState.inputContent.substring(
            0,
            prevState.inputContent.length - 1
          )
        };
      });
    }
  };

  onClearClick = () => {
    this.props.clearCalculatorMemory();
    this.setState({
      inputContent: "",
      operatorPressed: false,
      error: {},
      lastOperator: "",
      negativeOperand: false
    });
  };

  render() {
    const { errors } = this.state;
    const { loading } = this.props.mathOperation;
    let calculatorDisplay = null;
    if (loading === true) {
      calculatorDisplay = <Spinner />;
    } else {
      calculatorDisplay = <CalculatorDisplay value={this.state.inputContent} />;
    }
    return (
      <div className="calculator">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <h1>Simple Calculator</h1>
              {calculatorDisplay}
              <p style={{ color: "red" }}>{errors.message}</p>
            </div>
          </div>
          <br />
          <CalculatorButtons
            onNumberClick={this.onNumberClick}
            onOperatorClick={this.onOperatorClick}
            onDotClick={this.onDotClick}
            calculateClick={this.onCalculateClick}
            disabled={this.state.inputContent.length > 0 ? false : true}
          />
          <br />
          <ControlButtons
            deleteClick={this.onDeleteHandler}
            disabled={this.state.inputContent.length > 0 ? false : true}
            clearClick={this.onClearClick}
            calculateClick={this.onCalculateClick}
          />
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  caclucalteMathOperation: PropTypes.func.isRequired,
  clearCalculatorMemory: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  mathOperation: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    mathOperation: state.mathOperation,
    errors: state.errors
  };
};

const mapDispatchToProps = {
  caclucalteMathOperation,
  clearCalculatorMemory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
