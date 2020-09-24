import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Index } from "./components/Index";
import { Dolar } from "./components/Dolar";
import { Real } from "./components/Real";
import { Euro } from "./components/Euro";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route path="/dolar" component={Dolar} />
          <Route path="/euro" component={Euro} />
          <Route path="/real" component={Real} />
          <Route path="/about" component={About} />
          <Route path="/" component={Index} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
