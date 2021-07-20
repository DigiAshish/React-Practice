import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const ReactRedux = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const myRef = useRef();

  const addUser = () => {
    dispatch({ type: "ADD_USER", payload: myRef.current.value });
  };

  return (
    <>
      <p> React - Redux </p>
      <ul style={{ maxWidth: "100px", margin: "auto" }}>
        {user.map((item, index) => {
          return <li key={index}> {item} </li>;
        })}
      </ul>
      <br />
      <button onClick={addUser} style={{ marginRight: "10px" }}>
        {" "}
        Add New{" "}
      </button>
      <input type="text" ref={myRef} />
    </>
  );
};

export default ReactRedux;
