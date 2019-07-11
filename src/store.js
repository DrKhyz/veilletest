import {
  createStore,
  compose
  //  applyMiddleware
} from "redux";
// import thunk from "redux-thunk";
import reducer from "./reducers";

//Je crée le store avec createStore
//NB: je laisse en commentaire les lignes dans le cas d'une utilisation de
//redux thunk. Je vous laisse le loisir d'aller voir a quoi ca sert.
let store = createStore(
  reducer,
  compose(
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
