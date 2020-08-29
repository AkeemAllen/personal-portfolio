import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./router";

const App = () => {
  const [hover, setHover] = useState(false);
  return (
    <Router basename="">
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
