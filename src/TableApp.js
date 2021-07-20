import React from "react";

export default (TableApp) => {
  var tableStyle = {
    border: "1px solid black"
  };

  const myArray = [
    { Name: "Ashish", Age: "27" },
    { Name: "Nikhita", Age: "25" },
    { Name: "Harman", Age: "28" }
  ];

  const tableHeaderArray = Object.keys(myArray[0]);

  const headerMap = tableHeaderArray.map((item, index) => {
    return <th key={index}>{item} </th>;
  });

  const dataMap = myArray.map((item, index) => {
    return (
      <tr>
        {tableHeaderArray.map((key, index) => {
          return <td key={index}>{item[key]} </td>;
        })}
      </tr>
    );
  });
  return (
    <>
      <table style={tableStyle}>
        <tbody>
          <tr>{headerMap}</tr>
          {dataMap}
        </tbody>
      </table>
    </>
  );
};

// export default (TableApp) => {
//   const myStyle = {
//     border: "1px solid black"
//   };
//   const myArray = [
//     { Name: "Ashish", Age: "27" },
//     { Name: "Nikhita", Age: "25" },
//     { Name: "Harman", Age: "28" }
//   ];

//   const header = Object.keys(myArray[0]);
//   const data = myArray.map((v, i) => {
//     return (
//       <tr>
//         {header.map((v1, i1) => {
//           return <td key={i1}>{v[v1]}</td>;
//         })}
//       </tr>
//     );
//   });
//   return (
//     <>
//       <p>Hello from table app </p>
//       <table style={myStyle}>
//         <tr>{header}</tr>
//         {data}
//       </table>
//     </>
//   );
// };
