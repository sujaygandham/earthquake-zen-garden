import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Details } from "./details";
import { Home } from "./home";
import { Nav } from "./nav";
import { Profile } from "./profile";
import "./style.css";

export const TIME_FORMAT = "MMM DD, YYYY, HH:MM A";

export const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
