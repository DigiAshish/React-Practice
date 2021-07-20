import React, { useRef, useState } from "react";

const FormApp = (props) => {
  const myFNameRef = useRef();
  const myLNameRef = useRef();
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");

  const handleCheck = () => {
    setChecked(!checked);
    myLNameRef.current.style.display = checked ? "inline" : "none";
  };

  const submit = () => {
    var str = myFNameRef.current.value;
    str = checked ? str : str + " " + myLNameRef.current.value;
    setName(str);
  };

  return (
    <div>
      <p>This is Form Component</p>
      <h3> Welcome {name ? name : "there!"} </h3>
      <form>
        First Name <input type="text" name="fname" ref={myFNameRef} />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={handleCheck}
          defaultChecked={checked}
        />{" "}
        No LastName
        <br />
        <br />
        Last Name <input type="text" name="lname" ref={myLNameRef} />
        <br />
        <br />
        <button onClick={submit}> Submit </button>
      </form>
    </div>
  );
};

export default FormApp;
