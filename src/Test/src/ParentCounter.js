import React from "react";
import { useDispatch } from "react-redux";
import ChildCounter from "./ChildCounter";

const ParentCounter = () => {
  const dispatch = useDispatch();

  const handleCount = (str) => {
    if (str === "inc") {
      dispatch({ type: "INCREMENT", payload: 2 });
    } else {
      dispatch({ type: "DECREMENT", payload: 1 });
    }
  };
  return (
    <>
      <button onClick={() => handleCount("inc")}>INC</button>
      <button onClick={() => handleCount("dec")}>DEC</button>
      <ChildCounter />
    </>
  );
};
export default ParentCounter;
