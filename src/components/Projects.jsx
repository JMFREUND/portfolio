import React from "react";
import { Link } from "react-router-dom";
import food from "../images/Steak.svg";
import art from "../images/Arts.svg";
import shop from "../images/Ecommerce.svg";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects.</h2>
      <div className="cardWrapper">
        <div className="card">
          <div className="iconWrapper">
            <img src={art} alt="art" className="projectIcon" />
          </div>
          <h3>Animal Art Gallery</h3>
          <p>
            A web application/ social network for users to upload art, like &
            comment on other users art, and save art in a gallery.
          </p>
          <Link className="btn" to="https://animal-art-gallery.netlify.app">
            Visit
          </Link>
        </div>
        <div className="card">
          <div className="iconWrapper">
            {" "}
            <img src={food} alt="food" className="projectIcon" />
          </div>
          <h3>Dyner</h3>
          <p>
            A web application for users to create meal plans, save recipes and
            plan their grocery shopping.
          </p>
          <Link className="btn" to="https://dyner-mealplan.netlify.app">
            Visit
          </Link>
        </div>
        <div className="card">
          <div className="iconWrapper">
            {" "}
            <img src={shop} alt="ecommerce-shop" className="projectIcon" />
          </div>
          <h3>Lendista</h3>
          <p>
            An e-commerce fashion lending app where users can view clothes and
            rent them after creating a membership. Whereas
            admins can create, edit and delete products and approve returned
            items.
          </p>
          <Link className="btn" to="https://lendista.netlify.app">
            Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
