import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT
} from "./counter.action";
//La j'importe mes types (cf action)

//Je creer un store initial, ca rend le code lisible sur l'etat initial du reducer
const initialState = { count: 0 };

//J'exporte mon reducer pour le combiner avec les autres
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
