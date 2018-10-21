import { axiosInstance } from "../../custom-axios";
import {
  CALCULATE_MATH_OPERATION,
  GET_ERRORS,
  SET_LOADING,
  CANCEL_LOADING,
  CLEAR_ERRORS,
  CLEAR_CALCULATOR_DATA
} from "./actionTypes";

const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

const cancelLoading = () => {
  return {
    type: CANCEL_LOADING
  };
};

const dispatchErrors = err => {
  return {
    type: GET_ERRORS,
    payload: err
  };
};

const getResult = res => {
  return {
    type: CALCULATE_MATH_OPERATION,
    payload: res.result
  };
};

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

const clearCalculatorData = () => {
  return {
    type: CLEAR_CALCULATOR_DATA
  };
};

export const clearCalculatorMemory = () => dispatch => {
  dispatch(clearErrors());
  dispatch(clearCalculatorData());
};
export const caclucalteMathOperation = mathExpression => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axiosInstance.post("/api/calculate", mathExpression);
    dispatch(clearErrors({}));
    dispatch(getResult(res.data));
  } catch (err) {
    console.log(err);
    dispatch(cancelLoading());
    dispatch(clearCalculatorData());
    dispatch(dispatchErrors(err.response.data));
  }
};
