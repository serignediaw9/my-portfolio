// src/App.js

import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="App">  
      <Navbar />   
      <About />
      <Projects />
      <Skills />
    </div>
  );
}