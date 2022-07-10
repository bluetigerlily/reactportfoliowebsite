import React from "react";
import { projects } from "../../data";
import "./Projects.scss";
import { FaGithub } from 'react-icons/fa';
import dashboard from '../../assests/dashboard.mp4'


export default function Projects() {
    return (
        <section id="projects" className="projectssectionclass">
          <div className="projectsouterdivclass" id="projectsouterdivid">
            <div className="projectsinnerdivclass" id="projectsinnerdivid">
              <div className="projectstitlepara">
              <h1 className="projectstitleclass" id="projectstitleid">
                Projects
              </h1>
              <p className="projectsparaclass" id="projectsparaid">
                Below are just a few of the projects I've completed during my time coding!  My full GitHub can be found&nbsp;  
                 <a href="https://github.com/bluetigerlily" id="github" target="_blank" rel="noreferrer">here <FaGithub /></a>.
              </p>
              </div>
              <video className="videodiv" 
              autoPlay={true}
              loading={'lazy'}
              muted={true}
              loop={true}
              playsInline={true}>
              <source src={dashboard} type="video/mp4" />
              </video>
              
            </div>


            <div className="projectsmappingdivclass" id="projectsmappingdivid">

              {projects.map((project) => (
                <a
                  href={project.link}
                  target={project.target}
                  key={project.image}
                  className="projectslinkclass">
                  <div className="projectsimgcontainerclass">
                    <img
                      alt="gallery"
                      className="projectimgclass"
                      loading="lazy"
                      src={project.image}
                      target={project.target}
                    />
                    <div className="projectssubtitlecontainerclass">
                      <h2 className="projectssubtitleclass">
                        {project.subtitle}
                      </h2>
                      <h1 className="projectstitleclass">
                        {project.title}
                      </h1>
                      <p className="projectsdescriptionclass">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}