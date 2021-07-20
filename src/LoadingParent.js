// import React, { useEffect, useState } from "react";
// import Loading from "./Loading";

// const LoadingParent = () => {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     setTimeout(() => setData("Hello"), 10000);
//   });
//   return <>{data ? data : <Loading />}</>;
// };

// export default LoadingParent;

import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const LoadingParent = () => {
  const [data, setData] = useState("Hi");

  const handleClick = () => {
    setData("Loading");
    setTimeout(() => setData("Hello"), 2000);
  };
  return (
    <div>
      {data === "Loading" ? <Loading /> : data}
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default LoadingParent;
