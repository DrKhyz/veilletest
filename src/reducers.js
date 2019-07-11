import { combineReducers } from "redux";
import counter from "./pills/counter/counter.reducer.js";
// import reducerSup from "./pills/reducerSup/reducerSup.reducer.js";

//NB : Je choisi d'utiliser combineReducers car c'est comme ca dans la plupart des cas
//l'impact ce fait surtout au niveau des selecteurs, le chemin crée pour accéder
//à la donnée n'étant pas le même.
export default combineReducers({
  counter
  // reducerSup
});
