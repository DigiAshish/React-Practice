import React, { useState, useRef } from "react";

const ToDo = () => {
  const [list, setList] = useState(["Task1", "Task2", "Task3"]);
  const addNewRef = useRef();

  const removeTodo = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList([...newList]);
  };

  const addToDo = () => {
    let todo = addNewRef.current.value;
    if (todo.length > 0) setList([...list, todo]);
  };

  return (
    <>
      <h3> ToDo List </h3>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <input type="checkBox" onChange={() => removeTodo(index)} />
            {item}
            <br />
          </div>
        );
      })}

      <br />
      <button onClick={addToDo}> Add New </button>
      <input style={{ marginLeft: "10px" }} type="text" ref={addNewRef} />
    </>
  );
};

export default ToDo;
