import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Web19201 from "./components/Web19201";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|web-1920-1)">
          <Web19201 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
