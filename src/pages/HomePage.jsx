import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <div>
    <Header/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default HomePage