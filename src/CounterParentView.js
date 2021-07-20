import React, { useState } from "react";
import ChildCounter from "./CounterChild";

// const ParentCounterView = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = (str) => {
//     // alert(str);
//     setCounter(counter + 1);
//   };

//   const decrement = (str) => {
//     // alert(str);
//     setCounter(counter - 1);
//   };

//   return (
//     <>
//       <p> Parent Component with Counter</p>
//       <p>
//         <b>Counter : {counter}</b>
//       </p>
//       <ChildCounter childIncrement={increment} childDecrement={decrement} />
//     </>
//   );
// };

// export default ParentCounterView;

// const ParentCounterView = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = (str) => {
//     if (str === "inc") setCount(count + 1);
//     else setCount(count - 1);
//   };
//   return (
//     <>
//       Count : {count}
//       <button onClick={() => handleClick("inc")}>Increment </button>
//       <button onClick={() => handleClick("dec")}>Decrement </button>
//     </>
//   );
// };

const ParentCounterView = () => {
  const [count, setCount] = useState(0);

  const handleCount = (str) => {
    if (str === "inc") setCount(count + 1);
    else setCount(count - 1);
  };

  return (
    <>
      <p>Hello from Counter</p>
      Count : {count}
      <ChildCounter handleChildCount={handleCount} />
    </>
  );
};

export default ParentCounterView;
