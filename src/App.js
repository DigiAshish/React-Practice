import React, { useState } from "react";
import "./styles.css";
// import FetchAPIbyComponentDidMount from "./API/FetchAPIbyComponentDidMount";
// import FetchAPIbyHooks from "./API/FetchAPIbyHooks";
import FormApp from "./FormApp";
import TableApp from "./TableApp";
import List from "./List";
import CounterView from "./ContextAPI/StateContextView";
import ParentCounterView from "./CounterParentView";
import DropDownMenu from "./DropDownMenu";
import StopWatch from "./StopWatch";
import ToDo from "./ToDo";
import ReactRedux from "./Redux-React/Redux-ReactHooks";
import ReduxReactContainer from "./Redux-React/Redux-React";
import FlipCard from "./FlipCard";
import HambergerMenu from "./HambergerMenu";
import LoadingParent from "./LoadingParent";
import Modal from "./Modal";
import MoviePage from "./MoviePage";

export default (App) => {
  const [comp, setComp] = useState(<ReduxReactContainer />);

  const renderComp = (comp) => {
    switch (comp) {
      case "CounterApp":
        return <ParentCounterView />;
      case "DropDownMenu":
        return <DropDownMenu />;
      case "Forms":
        return <FormApp />;
      case "List":
        return <List />;
      case "Table":
        return <TableApp />;
      case "StopWatch":
        return <StopWatch />;
      case "ToDo":
        return <ToDo />;
      case "ContextAPI":
        return <CounterView />;
      case "Redux-React":
        return <ReduxReactContainer />;
      case "Redux-React-Hooks":
        return <ReactRedux />;
      case "FlipCard":
        return <FlipCard />;
      case "HambergerMenu":
        return <HambergerMenu />;
      case "Loading":
        return <LoadingParent />;
      case "Modal":
        return <Modal />;
      case "MoviePage":
        return <MoviePage />;
      default:
        return <ReduxReactContainer />;
    }
  };

  const listChanged = (e) => {
    setComp(renderComp(e.target.value));
  };

  return (
    <div className="App">
      <h1>Hello from APP</h1>
      <select name="listSelect" onChange={listChanged}>
        <option> Select Component</option>
        <option> CounterApp </option>
        <option> Forms </option>
        <option> List </option>
        <option> Table </option>
        <option> StopWatch </option>
        <option> ToDo </option>
        <option> ContextAPI </option>
        <option> Redux-React </option>
        <option> Redux-React-Hooks </option>
        <option> DropDownMenu </option>
        <option> FlipCard </option>
        <option> HambergerMenu </option>
        <option>Loading</option>
        <option>Modal</option>
        <option>MoviePage</option>
      </select>
      {comp}
    </div>
  );
};

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error()), 10);
// });

// promise.then((data) => console.log(data)).catch((e) => console.log(e));

// fetch().then((response)=>response.json()).then((data)=>console.log(data))
