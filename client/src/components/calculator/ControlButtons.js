import React from "react";
import PropTypes from "prop-types";

const ControlButton = props => (
  <div>
    <button
      className="btn btn-success mr-2 customControlButton"
      onClick={props.calculateClick}
      disabled={props.disabled}
    >
      Calculate
    </button>
    <button
      className="btn btn-danger mr-2 customControlButton"
      onClick={props.deleteClick}
      disabled={props.disabled}
    >
      Del
    </button>
    <button
      className="btn btn-primary customControlButton"
      onClick={props.clearClick}
    >
      AC
    </button>
  </div>
);

ControlButton.propTypes = {
  deleteClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  clearClick: PropTypes.func.isRequired,
  calculateClick: PropTypes.func.isRequired
};

export default ControlButton;
