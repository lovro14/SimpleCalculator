import React from "react";
import Input from "../UI/input/Input";
import { INPUT } from "../../element-type-constants";
import PropTypes from "prop-types";

const CalculatorDisplay = props => (
  <Input
    error = {props.error}
    type="text"
    elementType={INPUT}
    name="calculatorDispay"
    value={props.value}
    disabled="disabled"
  />
);

CalculatorDisplay.propTypes = {
  value: PropTypes.string.isRequired
};

export default CalculatorDisplay;
