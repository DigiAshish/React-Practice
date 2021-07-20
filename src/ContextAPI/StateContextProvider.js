import React, { useState, createContext } from "react";

export const StateContext = createContext();

export const StateContextProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <StateContext.Provider value={[count, setCount]}>
      {props.children}
    </StateContext.Provider>
  );
};
