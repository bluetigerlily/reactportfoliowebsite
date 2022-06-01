import React from "react";
import "./About.scss";
import Carouselleftright from "./Carouselleftright";

import bubblegumgif from '../assests/bubblegumgif.gif'

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
             <div className="geardiv">
               <p className="gearpone">Bringing Your Dreams To Life</p>
               <p className="gearptwo">Full Stack Developer</p>
             </div>


             <div className="svgandparacontainer">
            <div className="inner_poligon">
              <img src={bubblegumgif} className="bubblegumgif" alt="loading..."></img>
            </div>
                <div className="paracontainer">
            <p className="aboutfirstpara" id="aboutfirstparaid">
            "The only thing worse than starting something and failing... 
            is not starting something." -- Seth Godin.
              </p>
                </div>
              </div>
            <Carouselleftright  />
          </div>
        </section>
      );

}
}
export default About;