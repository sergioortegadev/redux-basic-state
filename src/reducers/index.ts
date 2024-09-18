import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import showLegendReducer from "./showLegendReducer";

const reducer = combineReducers({
  counter: counterReducer,
  showLegend: showLegendReducer,
});
export default reducer;
