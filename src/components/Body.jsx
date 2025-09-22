import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";

export default function Body() {
  return (
    <>
        <Intro />
        <div className="Main">
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </div>
    </>
  );
}
