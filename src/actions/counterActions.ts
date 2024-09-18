import { DECREMENT, INCREMENT, RESET } from "../types";

export const add = () => ({ type: INCREMENT });

export const sub = () => ({ type: DECREMENT });

export const reset = () => ({ type: RESET });
