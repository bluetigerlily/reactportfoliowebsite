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
            <a href='#about' className="aboutbtn" id="aboutbtnnav">
              About Me
            </a>
            </Link>
          </li>
      

            <li className="projectsnav" id="projectsnavbar">
            <Link to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              >
            <a href="#projects" className="projectsbtn" id="projectsbtnnav" >
              Projects
            </a>
            </Link>
            </li>

            <li className="skillsnav" id="skillsnavbar">
            <Link to="skills"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              >
            <a href="#skills" className="skillsbtn" id="skillsbtnnav">
              Skills
            </a>
            </Link>
            </li>

          <li className="contactnav" id="contactnavbar">
          <Link to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              >
            <a href="#contact" className="contactbtn" id="contactbtnnav">
              Contact Me
            </a>
            </Link>
          </li>

          </ul>
        </nav>
      </header>

    );
  }