import React from "react";
import "./about.css";
import ME from "../../assets/me-about.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Designations/Roles Worked</h5>
              <small>Associate Engineer - Technology/consultant(React Developer)/Executive-IT</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                Many Personal & Official Completed Projects.
              </small>
            </article>
          </div>

          <p>
           A Guy who loves tea more than a coffee.
           I like to sing, listen to songs and watch 
           cricket and soccer and I immensely involve in coding and 
           other topics related to software and hardware too.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
