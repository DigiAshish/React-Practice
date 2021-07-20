import React, { useState, useCallback } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const fruitList = ["Mango", "Kiwi", "Apple"];
  const carList = ["jeep", "hatchback", "Honda"];

  const listChanged = (e) => {
    const listName = e.target.value === "fruitList" ? fruitList : carList;
    setList([...listName]);
  };

  const handleSort = (str) => {
    let temp_list = list;
    if (str === "ASC") temp_list.sort((a, b) => a.localeCompare(b));
    else temp_list.sort((a, b) => b.localeCompare(a));
    setList([...temp_list]);
  };

  const mappedList = list.map((keys, index) => {
    return <li key={index}> {keys} </li>;
  });

  return (
    <>
      <p> hello from list </p>
      <select name="listSelect" onChange={listChanged}>
        <option value="fruitList"> Fruits </option>
        <option value="carList"> Cars </option>
      </select>
      <button onClick={() => handleSort("ASC")}>Sort Ascending</button>
      <button onClick={() => handleSort("DEC")}>Sort Decending</button>
      <ul> {mappedList} </ul>
    </>
  );
};

export default List;
