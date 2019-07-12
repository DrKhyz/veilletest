//Ici, je centralise le type de mes actions pour ne pas
//avoir 50 lignes a modifier si j'ai besoin de changer le nom
//Je les exporte pour pouvoir les reprendres dans mon reducer.

//@count me permet de connaitre mon reducer lors d'un dispatch dans redux dev tool
export const INCREMENT_COUNT = "@count/INCREMENT_COUNT";
export const DECREMENT_COUNT = "@count/DECREMENT_COUNT";
export const RESET_COUNT = "@count/RESET_COUNT";

//Ceci est un 'Action creator', il me permet
//de passer une valeur en paramètre, et de creer un action avec cette valeur en payload
// Pour rappel, une action est un objet avec un type, et un payload (un babage)
export const incrementCount = value => {
  return { type: INCREMENT_COUNT, payload: value };
};

export const decrementCount = value => {
  return { type: DECREMENT_COUNT, payload: value };
};

//Dans cet action creator, je ne passe pas de paramètre(s),
//mais me permet de voir que j'ai bien une action qui existe
export const resetEvent = () => {
  return { type: RESET_COUNT };
};
