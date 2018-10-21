import {
  SET_LOADING,
  CALCULATE_MATH_OPERATION,
  CANCEL_LOADING,
  CLEAR_CALCULATOR_DATA
} from "../actions/actionTypes";

const initialState = {
  result: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CANCEL_LOADING:
      return {
        ...state,
        loading: false
      };
    case CALCULATE_MATH_OPERATION:
      return {
        ...state,
        loading: false,
        result: action.payload
      };
    case CLEAR_CALCULATOR_DATA:
      return {
        ...state,
        result: null
      };
    default:
      return state;
  }
};

export default reducer;
