import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./router";
import logo from "./assets/Logo.svg";

const App = () => {
  return (
    <Router basename="">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ position: "absolute", top: 10, left: 30 }}
          width="50"
        />
      </Link>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => <route.component {...props} />}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
