import { combineReducers } from "redux";
import courses from "../../course/redux/reducer";

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
