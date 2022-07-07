import React from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
//smooth scrolling
export default function Navbar() {
  return (

      <header className="navbarheader">

        <nav className="navcontainer" id="navbarcontainer">
          <ul className="nav-list">
          <li className="aboutnav" id="aboutnavbar">
          <Link to="about"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              > 
              About Me 
            </Link>
          </li>
      

            <li className="projectsnav" id="projectsnavbar">
            <Link to="projects"
              smooth={true}
              offset={10}
              duration={500}
              spy={true}
              >
              Projects
            </Link>
            </li>

            <li className="skillsnav" id="skillsnavbar">
            <Link to="skills"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              >
              Skills
            </Link>
            </li>

          <li className="contactnav" id="contactnavbar">
          <Link to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              >
              Contact Me
            </Link>
          </li>

          </ul>
        </nav>
      </header>

    );
  }