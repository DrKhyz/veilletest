export const INCREMENT_COUNT = "@count/INCREMENT_COUNT";
export const DECREMENT_COUNT = "@count/DECREMENT_COUNT";
export const RESET_COUNT = "@count/RESET_COUNT";

export const incrementCount = value => {
  return { type: INCREMENT_COUNT, payload: value };
};

export const decrementCount = value => {
  return { type: DECREMENT_COUNT, payload: value };
};

export const resetEvent = () => {
  return { type: RESET_COUNT };
};
