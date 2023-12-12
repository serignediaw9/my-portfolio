// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Intro from "./components/Intro/intro";
import Resume from "./components/Resume/Resume"; // Import Resume component
import Navbar from "./components/Navbar/Navbar";
import BottomPanel from "./components/BottomPanel/BottomPanel";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} /> {/* Add this line for Resume */}
          <Route path="/" component={Intro} />
          {/* Add routes for other pages as needed */}
        </Switch>
        <BottomPanel />
      </div>
    </Router>
  );
}
