import React from "react";
import coding from "../images/undraw_programmer_re_owql (1).svg";
import javascript from "../images/icons8-javascript.svg";
import html from "../images/icons8-html.svg";
import css from "../images/icons8-css.svg";
import react from "../images/icons8-react-native.svg";
import nodeIcon from "../images/icons8-nodejs-32.png";
import expressIcon from "../images/icons8-express-js.svg";
import git from "../images/icons8-git.svg";
import github from "../images/icons8-github (1).svg";
import webflow from "../images/icons8-webflow.svg";

function AboutMe() {
  return (
    <section className="aboutMe" id="aboutme">
      <img src={coding} alt="" className="aboutMeImg" />
      <div className="aboutMeTxt">
        <h2>About Me.</h2>
        <p>
           Hi, I'm Jessica-Maria Freund, a passionate
          full-stack developer based in Amsterdam, originally from Nürnberg,
          Germany. I enjoy collaborating with cross-functional teams to
          create beautiful and user-friendly web experiences. My journey into
          web development began when I worked as a Business Development Manager
          at a Berlin-based startup. Witnessing the transformation of ideas into
          tangible websites and apps, I discovered my love for coding.
          Self-taught in HTML, CSS, and JavaScript, I found web development to
          be a perfect blend of creativity and challenge. To further enhance my
          skills, I enrolled in the Ironhack bootcamp, gaining expertise in
          React.js and Node.js for building complex projects. With adept
          communication skills and a cool-headed problem-solving approach, I
          thrive even in high-pressure situations. My background in customer
          service has taught me the art of remaining calm while tackling
          challenges. I aspire to use my creativity and coding skills to
          craft beautiful digital products that make a lasting impact. 
        </p>
        <div className="skills">
          <div className="techSkill">
            <img src={html} className="techIcon" alt="" />
            HMTL
          </div>
          <div className="techSkill">
            <img src={css} className="techIcon" alt="" />
            CSS
          </div>
          <div className="techSkill">
            <img src={javascript} className="techIcon" alt="" />
            JavaScript
          </div>
          <div className="techSkill">
            <img src={react} className="techIcon" alt="" />
            ReactJs
          </div>
          <div className="techSkill">
            <img src={nodeIcon} className="techIcon" alt="" />
            NodeJs
          </div>
          <div className="techSkill">
            <img src={expressIcon} className="techIcon" alt="" />
            ExpressJs
          </div>
          <div className="techSkill">
            <img src={git} className="techIcon" alt="" />
            Git
          </div>
          <div className="techSkill">
            <img src={github} className="techIcon" alt="" />
            Github
          </div>
          <div className="techSkill">
            <img src={webflow} className="techIcon" alt="" />
            Webflow
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
