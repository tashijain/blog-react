import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/screens/Home";
import Category from "./components/screens/Category";
import SinglePost from "./components/screens/SinglePost";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/singlepost">
        <SinglePost />
      </Route>
    </Router>
  );
}

export default App;
