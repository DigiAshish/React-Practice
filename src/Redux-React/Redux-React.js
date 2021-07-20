import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxReact extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  sendAlert = () => {
    this.props.sendTheAlert(this.myRef.current.value);
  };

  render() {
    return (
      <>
        <p> Redux with react Class Component</p>
        <ul style={{ margin: "auto", maxWidth: "100px" }}>
          {this.props.user.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
        <br />
        <button onClick={this.sendAlert} style={{ marginRight: "10px" }}>
          {" "}
          Add New{" "}
        </button>
        <input type="text" ref={this.myRef} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendTheAlert: (myRef) => {
      dispatch({ type: "ADD_USER", payload: myRef });
    }
  };
};

const ReduxReactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxReact);
export default ReduxReactContainer;
