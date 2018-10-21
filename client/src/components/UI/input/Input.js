import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { INPUT } from "../../../element-type-constants";

const Input = props => {
  let inputElement = null;
  switch (props.elementType) {
    case INPUT:
      inputElement = (
        <input
          type={props.type}
          className={classnames("form-control-lg", {
            "is-invalid": props.error
          })}
          name={props.name}
          value={props.value}
          disabled={props.disabled}
        />
      );
      break;
    default:
      inputElement = null;
  }
  return <div>{inputElement}</div>;
};

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;
