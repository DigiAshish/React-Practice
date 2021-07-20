export const incrementCount = (payload) => {
  return {
    type: "INCREMENT",
    payload
  };
};

export const decrementCount = (payload) => {
  return { type: "DECREMENT", payload };
};
