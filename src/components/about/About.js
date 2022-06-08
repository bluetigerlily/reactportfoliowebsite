import React from "react";
import "./About.scss";
import Carouselleftright from "./Carouselleftright";
import { Link } from "react-scroll";
import AboutQuote from "./AboutQuote";

// import Properties from "../data";


 class About extends React.Component {
   


render() {
    return (
        <section id="about">
          <div className="about" id="aboutcontainerid">

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

            <div className="svgparacarouselcontainer">
              <AboutQuote />
              <Carouselleftright  />
            </div>
          </div>
              
        </section>
        
      );

}
}
export default About;