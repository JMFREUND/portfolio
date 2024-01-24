import React from "react";

function ProjectModal({ project, closeModal }) {
  return (
    <div className="modalBg">
      <div className="modal">
        <div className="mockupWrapper">
          <button className="modalBtn" onClick={closeModal}>
            Back
          </button>
          <img src="" alt="" />
        </div>
        <div className="textWrapper">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="skillWrapper">
            <h4>Technologies:</h4>
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
