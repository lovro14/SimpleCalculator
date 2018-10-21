import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import mathOperationReducer from "./mathOperationReducer";

export default combineReducers({
  errors: errorReducer,
  mathOperation: mathOperationReducer
});
