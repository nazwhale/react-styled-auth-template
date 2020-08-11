import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import * as serviceWorker from "./serviceWorker";

// TODO: protected routes
//
// See:
// https://reactrouter.com/web/example/auth-workflow
// For making protected routes
//
// tldr; middleware for checking user is authenticated before a page load
//       for routes you should be authed to view

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
