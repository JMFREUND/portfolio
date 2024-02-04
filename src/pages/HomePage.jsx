import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <div>
      <Header />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default HomePage;
