import React from "react";
import { useSelector } from "react-redux";
import CountContext from "../ContextAPI/CountContext";
import RangeParent from "./RangeParent";

const ChildCounter = ({ handleChildCount }) => {
  const count = useSelector((state) => state.count);
  return (
    <CountContext.Provider value={count}>
      <div>Current Count: {count}</div>
      <RangeParent />
    </CountContext.Provider>
  );
};

export default ChildCounter;
