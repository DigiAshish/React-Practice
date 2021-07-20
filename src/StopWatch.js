import React, { useState, useEffect } from "react";

// const StopWatch = () => {
//   const [status, setStatus] = useState(false);
//   const [runningTime, setRunningTime] = useState(0);

//   const handleClick = () => {
//     setStatus(!status);
//   };

//   const handleReset = () => {
//     setStatus(false);
//     setRunningTime(0);
//   };

//   useEffect(() => {
//     let timer = null;
//     if (status) {
//       timer = setInterval(() => {
//         setRunningTime((runningTime) => runningTime + 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [status]);

//   return (
//     <>
//       <h3> Stop Watch </h3>
//       <p>
//         <b>{runningTime}</b>s
//       </p>
//       <button onClick={handleClick}>{status ? "Stop" : "Start"}</button>
//       <button style={{ marginLeft: "10px" }} onClick={handleReset}>
//         Reset
//       </button>
//     </>
//   );
// };

// export default StopWatch;

const StopWatch = () => {
  const [status, setStatus] = useState(false);
  const [runningTime, setRunningTime] = useState(0);

  useEffect(() => {
    let timer;
    if (status) {
      timer = setInterval(() => {
        setRunningTime((runningTime) => runningTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status]);

  const handleClick = () => {
    setStatus(!status);
  };

  const handleReset = () => {
    setStatus(false);
    setRunningTime(0);
  };
  return (
    <>
      <p>Hello from Stop Watch</p>
      {runningTime}
      <br />
      <button onClick={handleClick}>{status ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default StopWatch;

// describe('test',()=>{
//   function sum(a,b){
//     return a+b
//   }
//   it('testing',()=>{
//     expect(sum(2,2)).toBe(4)

//   })
// })
