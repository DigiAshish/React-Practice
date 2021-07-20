import React, { useContext } from "react";
import { StateContext } from "./StateContextProvider";

const StateContextConsumer = () => {
  const [count, setCount] = useContext(StateContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Hello From Consumer</p>
      <p>
        <b>Count : {count}</b>
      </p>
      <button
        style={{ background: "green", marginRight: "10px" }}
        onClick={increment}
      >
        Add
      </button>
      <button
        style={{ background: "red", marginRight: "10px" }}
        onClick={decrement}
      >
        Subtract
      </button>
    </div>
  );
};

export default StateContextConsumer;
