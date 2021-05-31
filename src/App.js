import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home.js";
import Devices from "./Pages/Devices/Devices.js";
import Users from "./Pages/Users/Users.js";
import Setting from "./Pages/Setting/Setting.js";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/devices" component={Devices} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
