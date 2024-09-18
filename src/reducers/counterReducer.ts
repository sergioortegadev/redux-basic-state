import { INCREMENT, DECREMENT, RESET } from "../types";

interface counterActions {
  type: typeof INCREMENT | typeof DECREMENT | typeof RESET;
}
const initialState: number = 0;

export const conunterReducer = (state: number = initialState, action: counterActions): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default conunterReducer;
