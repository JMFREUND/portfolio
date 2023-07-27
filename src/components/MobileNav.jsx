import React from "react";

function MobileNav({showMobile, setShowMobile}) {

  const handleClose = () => {
    setShowMobile(!showMobile)
  }

  return (
    <div className="mobileWrapper">
      <ul className="mobileNav">
        <li>
          <a className="navLink" href="./#aboutme" onClick={handleClose}>About Me</a>
        </li>
        <li>
          <a className="navLink" href="./#projects" onClick={handleClose}>Projects</a>
        </li>
        <li>
          <a className="navLink" href="./#contact" onClick={handleClose}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
