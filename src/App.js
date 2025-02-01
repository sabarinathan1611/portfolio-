import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About.js";
import Skills from "./skills/Skills.js";
import Project from "./project/Project.js";
import Contact from "./contact/Contact.js";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStatus from "./playerStatus/PlayerStatus.js";
const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About></About>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <PlayerStatus />
    </Router>
  );
};

export default App;
