import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favoritos from "./Components/Favoritos";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/favoritos">
            <Favoritos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
