import React from "react";
import arrow from "../images/arrowBackIcon.svg";

function ProjectModal({ project, closeModal }) {
  console.log(project);
  return (
    <div className="modalBg">
      <div className="modal">
        <div className="mockupWrapper">
          <button className="modalBtn" onClick={closeModal}>
            <img src={arrow} alt="" className="googleIcon" /> Back
          </button>
          {/* <div>
            {" "} */}
          <img src={project.mockup} alt="project-mockup" />
          {/* </div> */}
        </div>
        <div className="textWrapper">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="skillWrapper">
            {project.skills.map((skill, index) => (
              <div key={index}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
