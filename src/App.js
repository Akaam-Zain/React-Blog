import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <div>
            <Navbar />
            <Route path="/blog" exact component={Home} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
