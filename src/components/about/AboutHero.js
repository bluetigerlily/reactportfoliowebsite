import React from "react";
import { Link } from "react-scroll";
import geartwo from '../../assests/geartwo.svg';

const AboutHero = () => {
    return (
        <>
        <div className="aboutinnercontainer" id="aboutinnercontainerid">
        <h1 className="abouttitle" id="abouttitleid">
          Haley Moses
        </h1>
       </div>
       <div className="gearscontainer">
       <div className="gearandparacontainer">
       <div className="geardiv">
       </div>
         <p className="gearptwo">Full Stack Developer</p>
         <p className="gearpone">Keeping the Gears Turning</p>
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
       <div>
        <img 
        className="geartwo"
        src={geartwo}
        alt={'loading'}
        width={450}
        height={450}
        />
       </div>
       </div>
       </>
    );
}
export default AboutHero;