import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// import store from "./A_Niki_Amex_Test/Redux/Store.js";
import store from "./Redux/Store.js";
import { Provider } from "react-redux";

import App from "./App";
// import App from "./A_Niki_Amex_Test/src/App";
import FetchAPIbyHooks from "./API/FetchAPIbyHooks";

const routing = (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={FetchAPIbyHooks} />
        </div>
      </Switch>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
