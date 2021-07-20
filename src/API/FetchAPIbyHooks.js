import React, { useEffect } from "react";

const FetchAPIbyHooks = (props) => {
  // useEffect(() =>
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch(console.log("Error"))
  // );
  // return <div>FetchAPIbyHooks has Fetched using Hooks</div>;

  return <>Home {props.location.about.name}</>;
};

export default FetchAPIbyHooks;
