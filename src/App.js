import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/screens/Home";
import Category from "./components/screens/Category";
import SinglePost from "./components/screens/SinglePost";
import ErrorPage from "./components/screens/ErrorPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/singlepost">
          <SinglePost />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
