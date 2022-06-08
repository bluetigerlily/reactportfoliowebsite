import React from "react";
import { Link } from "react-scroll";

const AboutHero = () => {
    return (
        <>
        <div className="aboutinnercontainer" id="aboutinnercontainerid">
        <h1 className="abouttitle" id="abouttitleid">
          Haley Moses
        </h1>
       </div>
       <div className="gearandparacontainer">
       <div className="geardiv">
       </div>
         <p className="gearptwo">A Full Stack Experience</p>
         <p className="gearpone">That Brings It All Together</p>
          <button className="button-85">     
          <Link to="projects"
        smooth={true}
        offset={-70}
        duration={500}
        spy={true}
        >
      Check Out My Work
      </Link></button> 
       </div>
       </>
    );
}
export default AboutHero;