import React from "react";
import { projects } from "../data";
import "./Projects.scss";
import { Parallax } from 'react-scroll-parallax';
// parallax import



export default function Projects() {
    return (
        <section id="projects" className="projectssectionclass">
          <div className="projectsouterdivclass" id="projectsouterdivid">
            <div className="projectsinnerdivclass" id="projectsinnerdivid">
              <h1 className="projectstitleclass" id="projectstitleid">
                Apps I've Built
              </h1>
              <p className="projectsparaclass" id="projectsparaid">
                Below are just a few of the many projects I've completed during my time coding!  Also my full github can be found at: <br></br>  
                 <a href="https://github.com/bluetigerlily" target="_blank" rel="noreferrer">https://github.com/bluetigerlily</a>.
              </p>
            </div>

        <Parallax translateX={['-3', '0']}>

            <div className="projectsmappingdivclass" id="projectsmappingdivid">

              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}
                  className="projectslinkclass">
                  <div className="projectsimgcontainerclass">
                    <img
                      alt="gallery"
                      className="projectimgclass"
                      loading="lazy"
                      src={project.image}
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
            </Parallax>
          </div>
        </section>
      );
}