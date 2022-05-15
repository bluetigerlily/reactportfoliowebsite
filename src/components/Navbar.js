import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (

      <header className="navbarheader">

        <nav className="navcontainer" id="navbarcontainer">
          <ul className="nav-list">

          <li className="aboutnav" id="aboutnavbar">
            <a href='#about' className="aboutbtn" id="aboutbtnnav">
              About Me
            </a>
          </li>

            <li className="projectsnav" id="projectsnavbar">
            <a href="#projects" className="projectsbtn" id="projectsbtnnav" >
              Projects
            </a>
            </li>

            <li className="skillsnav" id="skillsnavbar">
            <a href="#skills" className="skillsbtn" id="skillsbtnnav">
              Skills
            </a>
            </li>

          <li className="contactnav" id="contactnavbar">
            <a href="#contact" className="contactbtn" id="contactbtnnav">
              Contact Me
            </a>
          </li>

          </ul>
        </nav>
      </header>

    );
  }