import React, { useContext } from "react";
import { StateContextProvider } from "./StateContextProvider";
import StateContextConsumer from "./StateContextConsumer";

const CounterView = () => {
  return (
    <>
      <p>Hello From Context Counter View</p>
      <StateContextProvider>
        <StateContextConsumer />
      </StateContextProvider>
    </>
  );
};

export default CounterView;
