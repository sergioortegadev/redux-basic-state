import { SHOW_LEGEND, HIDE_LEGEND } from "../types";

interface showLegendActions {
  type: typeof SHOW_LEGEND | typeof HIDE_LEGEND;
}
const initialState: boolean = false;

export const showLegendReducer = (state: boolean = initialState, action: showLegendActions) => {
  switch (action.type) {
    case SHOW_LEGEND:
      return true;
    case HIDE_LEGEND:
      return false;
    default:
      return state;
  }
};

export default showLegendReducer;
