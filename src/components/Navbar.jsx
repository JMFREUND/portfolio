import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hamburger from "../images/hamburger.svg";
import MobileNav from "./MobileNav";


function Navbar() {
  const [showMobile, setShowMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setShowMobile(!showMobile);
    console.log(showMobile)
  };

  const handleScroll = () => {
    // Change this value based on when you want the background color to change
    const scrollThreshold = 100;
    if (window.scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Apply the CSS to disable background scrolling when mobile navbar is open
    document.body.style.overflow = showMobile ? "hidden" : "visible";
  }, [showMobile]);

  return (
    <>
    <div className={`navWrapper ${scrolled ? "scrolled" : ""}`} >
      <div className="logo">JMF</div>
      <Link className="hamburger" onClick={handleNav}>
        <img src={hamburger} alt="hamburger" />
      </Link>
      <ul className="nav">
        <li>
          <a className="navLink" href="./#aboutme">About Me</a>
        </li>
        <li>
          <a className="navLink" href="./#projects">Projects</a>
        </li>
        <li>
          <a className="navLink" href="./#contact">Contact</a>
        </li>
      </ul>
    </div>
    {showMobile && <MobileNav showMobile={showMobile} setShowMobile={setShowMobile}/>}
    </>
  );
}

export default Navbar;
