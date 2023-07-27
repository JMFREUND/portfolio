import React from "react";
import headshot from "../images/My project-1 (1).png";

function Header() {
  return (
    <section className="header">
      <div className="headerTxt">
        <p>FULLSTACK DEVELOPER</p>
        <h1>Jessica-Maria Freund</h1>
        <p>
         I'm a passionate fullstack developer, looking to use my creativity and problem-solving skills to create beautiful user-friendly products.
         <br/> Let's connect! 
        </p>
        <a className="btn" href="./#contact">Get in touch</a>
      </div>
      <div className="headerImg">
      <img src={headshot} alt="" className="headshot"/>
      </div>
    </section>
  );
}

export default Header;
