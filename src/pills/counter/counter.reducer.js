import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT
} from "./counter.action";

const initialState = { count: 0 };

export function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + action.payload.count };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - action.payload.count };
    case RESET_COUNT:
      return initialState;
    default:
      return state;
  }
}
