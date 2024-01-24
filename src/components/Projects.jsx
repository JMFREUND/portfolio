import React, { useState } from "react";
import { Link } from "react-router-dom";
import food from "../images/Steak.svg";
import art from "../images/Arts.svg";
import shop from "../images/Ecommerce.svg";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [popup, setPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Animal Art Gallery",
      description:
        "A web application/ social network for users to upload art, like & comment on other users art, and save art in a gallery.",
      link: "https://animal-art-gallery.netlify.app",
      icon: art,
      skills: ["React", "NodeJs", "Express", "Typescript"],
    },
    {
      title: "Dyner",
      description:
        "A web application for users to create meal plans, save recipes and plan their grocery shopping.",
      link: "https://dyner-mealplan.netlify.app",
      icon: food,
      skills: ["React", "NodeJs", "Express", "Typescript"],
    },
    {
      title: "Lendista",
      description:
        "An e-commerce fashion lending app where users can view clothes and rent them after creating a membership. Whereas admins can create, edit and delete products and approve returned items.",
      link: "https://lendista.netlify.app",
      icon: shop,
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
                src={project.icon}
                alt={project.title}
                className="projectIcon"
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
