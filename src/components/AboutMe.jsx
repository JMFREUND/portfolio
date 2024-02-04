import React from "react";
import coding from "../images/undraw_programmer_re_owql (1).svg";
import javascript from "../images/icons8-javascript.svg";
import html from "../images/icons8-html.svg";
import css from "../images/icons8-css.svg";
import react from "../images/icons8-react-native.svg";
import nodeIcon from "../images/icons8-nodejs-32.png";
import expressIcon from "../images/icons8-express-js.svg";
import git from "../images/icons8-git.svg";
import postgres from "../images/icons8-postgresql.svg";
import typescript from "../images/icons8-typescript.svg";

function AboutMe() {
  const skillsArray = [
    { skill: "HTML", icon: html },
    { skill: "CSS", icon: css },
    { skill: "JavaScript", icon: javascript },
    { skill: "TypeScript", icon: typescript },
    { skill: "NextJs", icon: react },
    { skill: "NodeJs", icon: nodeIcon },
    { skill: "ExpressJs", icon: expressIcon },
    { skill: "Git", icon: git },
    { skill: "PostgreSQL", icon: postgres },
  ];
  return (
    <section className="aboutMe" id="aboutme">
      <img src={coding} alt="" className="aboutMeImg" />
      <div className="aboutMeTxt">
        <h2>About Me.</h2>
        <p>
          Hi, I'm Jessica-Maria Freund, a passionate full-stack developer based
          in Amsterdam. I enjoy collaborating with cross-functional teams to
          create beautiful and user-friendly web experiences. Self-taught in
          HTML, CSS, and JavaScript, I found web development to be a perfect
          blend of creativity and challenge. To further enhance my skills, I
          enrolled in the Ironhack bootcamp, gaining expertise in React.js and
          Node.js for building complex projects.
        </p>
        <h3>Experience</h3>
        <p>
          During my Frontend Engineering internship at D2X, a fintech company, I
          enhanced my expertise in Next.js, Material UI, and database management
          with PostgreSQL and SQL. Collaborating in a professional development
          environment, I contributed to crafting impactful digital products.
          With a background in customer service and a cool-headed
          problem-solving approach, I am eager to leverage my skills for
          continued growth in web development.
        </p>
        <div className="skills">
          {skillsArray.map(({ icon, skill }) => (
            <div className="techSkill">
              <img src={icon} className="techIcon" alt="" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
