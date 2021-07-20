import React from "react";

// const ChildCounter = ({ childIncrement, childDecrement }) => {
//   return (
//     <>
//       <p> Child Component</p>
//       <button onClick={() => childIncrement("Increment")}> Add </button>
//       <button onClick={() => childDecrement("Decrement")}> Subtract </button>
//     </>
//   );
// };

const ChildCounter = ({ handleChildCount }) => {
  return (
    <>
      <button onClick={() => handleChildCount("inc")}>Increment</button>
      <button onClick={() => handleChildCount("dec")}>Decrement</button>
    </>
  );
};

export default ChildCounter;
