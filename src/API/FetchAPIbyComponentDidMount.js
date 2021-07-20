import React from "react";

export default class FetchAPIbyComponentDidMount extends React.Component {
  componentDidMount() {
    fetch("https://api.github.com/users/hacktivist123/repos")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(console.log("Error"));
  }

  render() {
    return <p>FetchAPIbyComponentDidMount has Fetched by componentDidMount</p>;
  }
}
