import React, { Component } from "react";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

const Main = () => {
  return (
    <React.Fragment>
      <Intro />
      <Portfolio />
      <About />
      <Contact />
    </React.Fragment>
  );
};

export default Main;
