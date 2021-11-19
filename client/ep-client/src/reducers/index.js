import { combineReducers } from "redux";
import authReducer from "./authReducer";
import selectTestReducer from "./selectReducer";
import classesReducer from "./classesReducer";

export default combineReducers({
  auth: authReducer,
  selectedTest: selectTestReducer,
  classesData: classesReducer
});
