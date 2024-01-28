import React, { useState } from "react";
import { Link } from "react-router-dom";
import food from "../images/Steak.svg";
import art from "../images/Arts.svg";
import shop from "../images/Ecommerce.svg";
import ProjectModal from "./ProjectModal";
import AagMockup from "../images/aagMockup.png";
import DynerMockup from "../images/dynerMockup.png";
import LendistaMockup from "../images/lendistaMockup.png";
import aagLogo from "../images/aacLogo.png";
import dynerLogo from "../images/dynerLogo.png";
import lendistaLogo from "../images/lendistaLogo.jpg";

function Projects() {
  const [popup, setPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Animal Art Gallery",
      shortIntro:
        "A vibrant social network for art enthusiasts. Upload, like, and comment on art. Create a personalized gallery.",
      description:
        "Animal Art Gallery is a dynamic web application and social network designed for art enthusiasts. Users can seamlessly upload their artwork, engage with other artists through likes and comments, and curate their favorite pieces in a personalized gallery.",
      link: "https://animal-art-gallery.netlify.app",
      logo: aagLogo,
      icon: art,
      mockup: AagMockup,
      skills: ["React", "NodeJs", "Express", "Typescript"],
    },
    {
      title: "Dyner",
      shortIntro:
        "Effortlessly plan meals, save recipes, and organize grocery shopping. Your go-to web app for meal management.",

      description:
        "Dyner is a dynamic web application designed to revolutionize the way users approach meal planning, recipe organization, and grocery shopping. It offers a seamless and intuitive experience for individuals striving for a more organized and efficient culinary lifestyle.",
      link: "https://dyner-mealplan.netlify.app",
      logo: dynerLogo,
      icon: food,
      mockup: DynerMockup,
      skills: ["React", "NodeJs", "Express", "Typescript"],
    },
    {
      title: "Lendista",
      shortIntro:
        "Fashion at your fingertips. Explore, rent, and embrace the latest styles with Lendista's e-commerce fashion lending app.",
      description:
        "Lendista, an innovative e-commerce fashion lending app, brings a fresh perspective to the world of style. It offers a unique platform where users can effortlessly explore a curated collection of fashionable garments, create memberships, and experience the joy of renting premium clothing. On the administrative front, Lendista provides robust tools for product management, ensuring a seamless and efficient operation.",
      link: "https://lendista.netlify.app",
      logo: lendistaLogo,
      icon: shop,
      mockup: LendistaMockup,
      skills: ["React", "NodeJs", "Express", "Typescript"],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setPopup(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setPopup(false);
  };

  return (
    <section className="projects" id="projects">
      <h2>My Projects.</h2>
      <div className="cardWrapper">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="iconWrapper">
              <img
                src={project.logo}
                alt={project.title}
                className="projectIcon"
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.shortIntro}</p>
            <div className="projectBtnWrapper">
              <Link className="btn" to={project.link}>
                Visit
              </Link>

              <button onClick={() => openModal(project)}>Details</button>
            </div>
          </div>
        ))}
        {popup && (
          <ProjectModal project={selectedProject} closeModal={closeModal} />
        )}
      </div>
    </section>
  );
}

export default Projects;
