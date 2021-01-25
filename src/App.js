import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home.js";
import LiveData from "./Pages/LiveData/LiveData.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/live" component={LiveData}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
